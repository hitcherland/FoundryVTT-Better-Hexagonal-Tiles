export class BHTTile extends Tile {
    _refresh(options) {
        super._refresh(options);
        if ( this.mesh ) {
            let [ox, oy] = this._getTileOffset();
            console.warn(this, this.document.x, this.document.y, ox, oy);
            this.mesh.position.set(this.document.x + canvas.grid.grid.w / 2, this.document.y + canvas.grid.grid.h / 2);
        }
    }
}