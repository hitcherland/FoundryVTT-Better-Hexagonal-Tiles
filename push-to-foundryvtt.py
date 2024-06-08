#!/usr/bin/python

import argparse
import json
import requests
import sys

parser = argparse.ArgumentParser()
parser.add_argument(
    "--release-token",
    "-t",
    help="the release token for this package, which you find at https://foundryvtt.com/packages/better-hexagonal-tiles/edit",
    required=True,
)
parser.add_argument("--dry-run", default=False, type=bool, help="run in dry-run mode")


def push_to_foundryvtt(module: dict, release_token: str, dry_run: False) -> bool:
    # request configured per https://foundryvtt.com/article/package-release-api/
    response = requests.post(
        "https://api.foundryvtt.com/_api/packages/release_version/",
        json={
            "id": module["id"],
            "dry-run": dry_run,
            "release": {
                "version": module["version"],
                "manifest": f"https://github.com/hitcherland/FoundryVTT-Better-Hexagonal-Tiles/archive/refs/tags/{module['version']}/better-hexagonal-tiles.zip",
                "notes": f"https://github.com/hitcherland/FoundryVTT-Better-Hexagonal-Tiles/releases/tag/1{module['version']}",
                "compatibility": module["compatibility"],
            },
        },
        headers={
            "Content-Type": "application/json",
            "Authorization": release_token,
        },
    )

    if response.status_code == 403:
        print(f"Invalid version id: {response.content}")
        return False

    body = json.loads(response.content)
    if body["status"] == "error":
        errors = body["errors"]
        all_errors = errors["__all__"]
        for error in all_errors:
            print(error["message"])
        return False

    if body["status"] == "success":
        if "message" in body:
            print(body["message"])
        else:
            print("Success")

    return True


def main(args: list[str]) -> int:
    args = parser.parse_args()

    with open("module.json") as f:
        module = json.loads(f.read())

    if push_to_foundryvtt(module, args.release_token, args.dry_run):
      return 0

    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv))
