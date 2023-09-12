/**
 * (#)events-module.mjs 1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { EventEmitter } from 'events';

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
            console.log('A saved event occured');
        });

        emitter.emit('saved')
    }

    /**
     * Emit an event with arguments.
     */
    emitWithArguments() {
        console.log('Emit with arguments');
    }
}

