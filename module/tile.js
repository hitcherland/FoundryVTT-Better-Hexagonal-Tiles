export class BHTTile extends Tile {
    #customRefresh() {
        if(!game.canvas.grid.isHex) return;
        const m = this.mesh.position;
        let {x, y} = m;
        let {w, h} = canvas.grid.grid;
        let {width, height} = this.mesh;
        m.set(x + w / 2 - width / 2, y + h / 2 - height / 2);
    }

    _applyRenderFlags(flags) {
        super._applyRenderFlags(flags);
        this.#customRefresh();
    }
}
