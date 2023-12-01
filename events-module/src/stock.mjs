/**
 * (#)stock.mjs 1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { EventEmitter } from 'events';

/**
 * The stock class.
 */
export class Stock extends EventEmitter {
    /**
     * The constructor.
     *
     * @param   {string}    symbol
     * @param   {number}    price
     */
    constructor(symbol, price) {
        super();

        this._symbol = symbol;
        this._price = price;
    }

    /**
     * Set a new price.
     *
     * @param   {number}    newPrice
     */
    set price(newPrice) {
        if (newPrice !== this._price) {
            this.emit('PriceChanged', {
                symbol: this._symbol,
                oldPrice: this._price,
                newPrice: newPrice,
                adjustment: ((newPrice - this._price) * 100 / this._price).toFixed(2)
            });
        }
    }

    /**
     * Get the price.
     *
     * @returns {number}
     */
    get price() {
        return this._price;
    }

    /**
     * Get the symbol.
     *
     * @returns {string}
     */
    get symbol() {
        return this._symbol;
    }
}