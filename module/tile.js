export class BHTTile extends Tile {
    _refresh(options) {
        super._refresh(options);
        if ( this.mesh ) {
            this.mesh.position.set(this.document.x + canvas.grid.grid.w / 2, this.document.y + canvas.grid.grid.h / 2);
        }
    }
}
