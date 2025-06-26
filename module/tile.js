
export class BHTTile extends foundry.canvas.placeables.Tile {
    // Adjust tiles don't fit the normal layout
    getSnappedPosition(position) {
        // first, update the input position so that we're dragging the center
        // and we don't see any weird jumps
        let size = Math.max(canvas.grid.sizeX, canvas.grid.sizeY);
        let dx = (size - this.mesh.width) / 2;
        let dy = (size - this.mesh.height) / 2;
        position.x -= dx;
        position.y -= dy

        // then update the default snapped position by the same amount
        let p = super.getSnappedPosition(position);
        p.x += dx;
        p.y += dy;
        return p;
    }
}

export class BHTTilesLayer extends foundry.canvas.layers.TilesLayer {
    // Adjust the vertex position to be "aligned" better with a normal hexagonal image
    getSnappedPoint(point) {
        let p = super.getSnappedPoint(point);
        p.y -= (canvas.grid.sizeX - canvas.grid.size) / 2;
        p.x -= (canvas.grid.sizeY - canvas.grid.size) / 2;
        return p;
    }
}