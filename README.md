# Better Hexagonal Tiles

This is a simple module for FoundryVTT that adjusts the rendering position of Tiles on hexagonal grids.

Most hexagonal assets come centered inside of a square image, for example:
<img src="https://i.imgur.com/HK2qImc.png" width="256" height="256">

FoundryVTT's Tile renders assumes that the hexagon is as close to the top left of the image as possible. This makes it look like FoundryVTT isn't snapping Tiles to a hexagonal grid correctly.

## Without Better Hexagonal Tiles
Note that in this image, the hexagon appears off center.
![An Offcenter Hexagonal Tile on a Hexagonal Grid](https://i.imgur.com/I0WxlId.png)

## With Better Hexagonal Tiles
Now the hexagon looks much more natural.
![A Centered Hexagonal Tile on a Hexagonal Grid](https://i.imgur.com/rvK0iYe.png)