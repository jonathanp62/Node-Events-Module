/**
 * (#)events-module.mjs 1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { EventEmitter } from 'events';
import { Stock } from './stock.mjs';

/**
 * The events module class.
 */
export class EventsModule {
    /**
     * Emit an event.
     */
    emit() {
        const emitter = new EventEmitter();

        emitter.on('saved', () => {
            console.log('A saved event occurred');
        });

        emitter.emit('saved');
    }

    /**
     * Emit an event with arguments.
     */
    emitWithArguments() {
        const emitter = new EventEmitter();

        emitter.on('saved', (arg) => {
            console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
        });

        emitter.emit('saved', {
            id: 1,
            name: 'John Doe'
        });
    }

    /**
     * Emit an event with arguments
     * then detach the event listener.
     */
    emitThenDetach() {
        /**
         * Log the event.
         *
         * @param   {{string, string}}  arg
         */
        function log(arg) {
            console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
        }

        const emitter = new EventEmitter();

        emitter.on('saved', log);

        emitter.emit('saved', {
            id: 2,
            name: 'Jane Doe'
        });

        emitter.off('saved', log);

        emitter.emit('saved', {
            id: 3,
            name: 'Susie Doe'
        }); // This event is not emitted
    }

    /**
     * Emit an event when a data value changes.
     */
    emitOnDataChange() {
        const stock = new Stock('AAPL', 700);

        stock.on('PriceChanged', (arg) => {
            console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
        });

        stock.price = 720;
    }
}

