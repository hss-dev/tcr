import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/tcrTab/index.html")
@PreventIframe("/tcrTab/config.html")
@PreventIframe("/tcrTab/remove.html")
export class TcrTab {
}
