export class BHTTile extends Tile {

    _getTileOffset() {
        const aw = Math.abs(this.data.width);
        const ah = Math.abs(this.data.height);
        const apo = 0.5 / Math.tan(Math.PI / 6);
        if ([CONST.GRID_TYPES.HEXODDQ, CONST.GRID_TYPES.HEXEVENQ].includes(canvas.grid.type)) {
            return [aw / 2, ah * apo / 2];
        } else if ([CONST.GRID_TYPES.HEXODDR, CONST.GRID_TYPES.HEXEVENR].includes(canvas.grid.type)) {
            return [aw * apo / 2, ah / 2];
        } else {
            return [aw / 2, ah / 2];
        }
    }

    refresh() {
        const r = Math.toRadians(this.data.rotation);

        // Update tile appearance
        this.position.set(this.data.x, this.data.y);
        if (this.tile) {

            // Tile position
            this.tile.scale.x = this.data.width / this.texture.width;
            this.tile.scale.y = this.data.height / this.texture.height;
            this.tile.position.set(...this._getTileOffset());
            this.tile.rotation = r;

            // Tile appearance
            this.tile.alpha = this.data.hidden ? Math.min(0.5, this.data.alpha) : this.data.alpha;
            this.tile.tint = this.data.tint ? foundry.utils.colorStringToHex(this.data.tint) : 0xFFFFFF;
        }

        // Temporary tile background
        if (this.bg) this.bg.clear().beginFill(0xFFFFFF, 0.5).drawRect(0, 0, this.data.width, this.data.height).endFill();

        // Define bounds and update the border frame
        let bounds = (this.data.width === this.data.height) ?
            new NormalizedRectangle(0, 0, this.data.width, this.data.height) : // Square tiles
            NormalizedRectangle.fromRotation(0, 0, this.data.width, this.data.height, r); // Non-square tiles
        this.hitArea = this._controlled ? bounds.clone().pad(20) : bounds;
        this._refreshBorder(bounds);
        this._refreshHandle(bounds);

        // Set visibility
        this.visible = !this.data.hidden || game.user.isGM;
        return this;
    }
}