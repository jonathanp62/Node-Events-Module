/**
 * (#)application.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
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
        let eventsModule = new EventsModule();

        eventsModule.emit();
        eventsModule.emitWithArguments();
        eventsModule.emitThenDetach()
    }
}
