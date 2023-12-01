/**
 * (#)application.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { EventsModule } from "./events-module.mjs";

/**
 * The application class.
 */
export class Application {
    /**
     * The run method.
     */
    run() {
        const eventsModule = new EventsModule();

        eventsModule.emit();
        eventsModule.emitWithArguments();
        eventsModule.emitThenDetach()
        eventsModule.emitOnDataChange();
    }
}
