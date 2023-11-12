export class BHTTile extends Tile {
    #customRefresh() {
        if(!game.canvas.grid.isHex) return;
        const m = this.mesh.position;
        let {x, y} = m;
        let {w, h} = canvas.grid.grid;
        let {width, height} = this.mesh;

        // due to the way tiles are defined in foundry,
        // width & height are integers, but w & h are floats
        // this causes some unexpected offsetting unless we round down
        let X = Math.floor(x + (w - width) / 2);
        let Y = Math.floor(y + (h - height) / 2);

        m.set(X, Y);
    }

    _applyRenderFlags(flags) {
        super._applyRenderFlags(flags);
        this.#customRefresh();
    }
}
