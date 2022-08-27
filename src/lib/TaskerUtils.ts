
import { global, local } from './Tasker'

export class Locals {
    static ActionError(): number {
        return  <number>local("%err");
    }
}


export class Globals {
    /*-   **Airplane Mode Status**`(dynamic)`\
    *%AIR*\
    Whether Airplane Mode is **on** or **off**
-   **Airplane Radios**\
    *%AIRR*\
    A comma-separated list of the radios which will be **disabled** when entering Airplane Mode.\
    Common radio names are: *bluetooth, cell, nfc, wifi, wimax*.
-   **Battery Level**\
    *%BATT*\
    Current device battery level from 0-100.
-   **Bluetooth Status** `(dynamic)`\
    *%BLUE*\
    Whether Bluetooth is **on** or in some other state (**off**).

-   **Calendar List**\
    *%CALS*\
    Newline-separated list of calendars available on the device.\
    Each entry is in the format *calendarprovider:calendarname*.\
    Example usage:

    	Variable Set, %newline, \n
    	Variable Split, %CALS, %newline
    	Flash, %CALS(#) calendars, first one is %CALS(1)

    For the sign *\n*, press carriage-return on the keyboard.
-   **Calendar Event Title / Descr / Location** *%CALTITLE / %CALDESCR / %CALLOC*\
    The title, description and location of the **current** calendar event, if there is one. If there are multiple current calendar events the variables refer to the **shortest**.\
    Tip: find other details about the current event(s) using the `Misc / Test` action, specifying %TIMES for the data.
-   **Call Name / Number/ Date / Time (In)** `(dynamic, monitored)`\
    *%CNAME / %CNUM / %CDATE / %CTIME*\
    The caller name, number, date and time of the current (if a call is in progress) or last call received.\
    Caller number is **0** if it's unknown.\
    Caller name is **?** if it's unknown (probably because the caller number was blocked) and set to the caller number if the contact couldn't be looked up. It's unavailable on Android versions prior to 2.0.
-   **Call Name / Number/ Date / Time / Duration (Out)**`(dynamic, monitored)`\
    *%CONAME / %CONUM / %CODATE / %COTIME / %CODUR*\
    The called name, number, date and time of the last (**not** the current) outgoing call made.\
    Called Name is set to the called number if the contact couldn't be looked up. It's unavailable on Android versions prior to 2.0.
-   **Cell ID** `(monitored,dynamic)`\
    *%CELLID*\
    The current cell tower ID if known.\
    If you are using a Cell Near state, note that sometimes the Cell Near state will stay active even though %CELLID reports that the tower ID is unknown or invalid; that is because Cell Near only responds to valid IDs to prevent the state becoming inactive e.g. due to a service interruption.\
    For backwards compatibility, UMTS cells are reported with a GSM prefix.\
    From Android 4.2, Tasker version 4.3+, cells could be found from 2 different network types simultaneously. In that case, the value is reported with preference for the network type leftmost on the list: GSM, CDMA, UMTS, LTE.
-   **Cell Signal Strength** `(monitored,dynamic)`\
    *%CELLSIG*\
    The current phone signal level from 0-8 inclusive on a rougly linear scale. On some phones, the level will rise in steps of 2 (0,2,4,6,8). The value is -1 if the value is unknown or there is e.g. no service.\
    From Android 4.2, Tasker version 4.3+, cells could be found from 2 different network types simultaneously. In that case, the value is reported with preference for the network type leftmost on the list: GSM, CDMA, UMTS, LTE.\
    There is a bug with some Android versions that the reported signal strength is not updated until the device is turned off and on.
-   **Cell Service State** `(monitored,dynamic)`\
    *%CELLSRV*\
    The current phone service state. One of *unknown, service, noservice, emergency, nopower*.
-   **Clipboard Contents**`(monitored,dynamic)` *%CLIP*\
    The current contents of the system clipboard. Please note that the clipboard can't be accessed while the device's screen is securely locked.
-   **CPU Frequency**\
    *%CPUFREQ*\
    The current frequency CPU 0 is running at. See also: [CPU Control](https://tasker.joaoapps.com/userguide/en/cpu.html).
-   **CPU Governor**\
    *%CPUGOV*\
    The current governor controlling the frequency of CPU 0. See also: [CPU Control](https://tasker.joaoapps.com/userguide/en/cpu.html).
-   **Date**\
    *%DATE*\
    Current human-readable date.
-   **Day of the Month**\
    *%DAYM*\
    Current Day of the Month, starting at 1.
-   **Day of the Week**\
    *%DAYW*\
    Current Day of the Week starting with Sunday.
-   **Device ID / Manufacturer / Model / Product**\
    *%DEVID / %DEVMAN / %DEVMOD / %DEVPROD*\
    The ID, manufacturer, model and product name of the device.\
    Note: ID is **not** a unique identifier for the device, but rather for the hardware of the device. See also: %DEVTID.
-   **Device Telephony ID**\
    *%DEVTID*\
    Returns the unique telephony-based ID for the device (e.g. for GSM the IMEI, for CDMA the MEID or ESN).\
    Not available on all devices.
-   **Display Brightness** *%BRIGHT*\
    Current screen brightness, 0-255. On some devices, if the Android setting Auto Brightness is enabled, the value will always be 255.
-   **Display Timeout** *%DTOUT*\
    Current system screen timeout (seconds).
-   **Email From / Cc / Subject / Date / Time** `(dynamic)`\
    *%EFROM / %ECC / %ESUBJ / %EDATE / %ETIME*\
    The From, Cc, Subject, Received Date and Received Time of the last email received by the K9 email agent.
-   **Free Memory**\
    *%MEMF*\
    System free memory remaining in MB.
-   **GPS Status**\
    (monitored,dynamic Gingerbread+) *%GPS*\
    Whether the system GPS receiver is **on** or **off**.
-   **Heart Rate** `(monitored,dynamic)`\
    *%HEART*\
    The current detected heart rate in beats per minute.\
    See also: state *Heart Rate*.\
    The value will be negative for no contact (-1), accuracy unreliable (-2) or some other problem (-3)
-   **HTTP Response Code / Data / Content Length**`(dynamic)` *%HTTPR / %HTTPD / %HTTPL*\
    Values from the last HTTP POST/GET action.\
    If the server doesn't return a content length, %HTTPL will be calculated from the returned data where possible.
-   **Humidity** `(monitored,dynamic)`\
    *%HUMIDITY*\
    The relative ambient air humidity in percent.\
    See also: state *Humidity*.
-   **Input Method**\
    *%IMETHOD*\
    The current active input method. Consists of 4 parts separated by commas: Method Name, SubType Name, Mode, Locale.\
    To access particular parts, use the *Variable Split* action.
-   **Interrupt Mode** `(dynamic)`\
    *%INTERRUPT*\
    Only available on Android 5.0+, **requires Tasker's notification access service to be enabled**, see Android's Sound & Notification settings.

    Android 5.0+: the current state of interruptions mode on the device: **none**, **priority** or **all**\
    See Also: action *Interrupt Mode*

    Android 6.0+: the current state of Do Not Disturb mode on the device: **none**, **priority**, **all** or **alarms**\
    See Also: action *Do Not Disturb*
-   **Keyguard Status**\
    *%KEYG*\
    Whether the Keyguard is **on** or **off**
-   **Last Application**\
    *%LAPP*\
    The name of the application that was in the foreground before the current one e.g. Maps.
-   **Last Photo**\
    *%FOTO*\
    The filesystem path to the last photo taken by Tasker or the standard system camera application.
-   **Light Level** `(monitored,dynamic)`\
    *%LIGHT*\
    The last recorded light level in lux.\
    Note that Android does not return a value until the light level changes, so to test the sensor is working you should put it near a bright light initially.\
    May not change when the device display is off, see `Menu / Prefs / More / Display Off Monitoring / Light Sensor`.
-   **Location** `(dynamic)`\
    *%LOC*\
    The latitude and longitude of the last GPS fix.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Accuracy** `(dynamic)`\
    *%LOCACC*\
    The accuracy in metres of the last GPS fix.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Altitude** `(dynamic)`\
    *%LOCALT*\
    The altitude in metres of the last GPS fix, or 0 if unavailable.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Speed** `(dynamic)`\
    *%LOCSPD*\
    The speed in metres/second at the last GPS position fix or 0 if unavailable.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Fix Time Seconds** `(dynamic)`\
    *%LOCTMS*\
    The time in seconds of the last GPS fix. To get age of fix, take this away from %TIMES.\
    This value is not set until an offset of the GPS time from the fixed time has been calculated (should be after the first GPS fix) because the value is meaningless until that point.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location (Net)** `(dynamic)`\
    *%LOCN*\
    The latitude and longitude of the last network location fix.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Accuracy (Net)** `(dynamic)`\
    *%LOCNACC*\
    The accuracy in metres of the last network location fix.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Location Fix Time (Net)** `(dynamic)`\
    *%LOCNTMS*\
    The time in seconds of the last net location fix. To get age of fix, take this away from %TIMES.\
    [See note](https://tasker.joaoapps.com/userguide/en/variables.html#locnote).
-   **Magnetic Field Strength** `(monitored,dynamic)`\
    *%MFIELD*\
    The total magnitudes in micro-Teslas of the magnetic fields acting on all three axis of the devices sensor.\
    Updated once per second.\
    See Also: state `Magnetic Field`.
-   **Music Track** `(monitored,dynamic)`\
    *%MTRACK*\
    The current playing music track, supported for:
    -   Tasker actions *Music Play* and *Music Play Dir*
    -   Built-in Android music-player, probably not on all devices however
    -   Power AMP
    -   BeyondPod (Tasker v1.2.1+)
    -   Phantom Music Control Pro
    -   Media UtilitiesPriority: if both Tasker and one of the other supported apps are playing simultaneously, the non-Tasker track will be shown. If more than one of the other supported apps is playing simultaneuosly, behaviour is unspecified.\
    Notes:
    -   if you don't have a supported player, you could try Phantom Music Control Pro or Media Utilities, which support a lot of players and should pass the info on to Tasker
    -   pausing a track clears the variable, unpausing sets it again
    -   your music player may need an option enabled in order to broadcast the track information, or the broadcast may only be available in a 'pro' version
-   **Muted**\
    *%MUTED*\
    Whether the microphone is currently muted (**on**) or not (**off**).
-   **Night Mode**\
    *%NIGHT*\
    The current Android Night Mode.\
    One of **on**, **off** or **auto**.\
    If **auto**, Android will decide whether it should be in Night Mode itself.
-   **Notification Title** `(monitored, dynamic)`\
    *%NTITLE*\
    The title of the last notification shown in the status bar. Prior to KitKat, requires Tasker's accessibility server to be running (see Android Accessibility Settings). From KitKat, requires Tasker's Notification Listener service to be running instead.\
    In a task running as a result of a `Notification` or `Notification Removed` event, use variable %evtprm2 instead of %NTITLE. This is much more reliable and you have access to other parts of the notification (%evtprm3 etc)\
    Notifications generated by Tasker are not shown.
-   **Phone Number**\
    *%PNUM*\
    The current phone number of the device, if it's in service.\
    On some phones it doesn't work (Android limitation), seems related to the type of SIM.
-   **Pressure** `(monitored,dynamic)`\
    *%PRESSURE*\
    The current air pressure on the device in millibars.\
    May not change when the device display is off, see `Menu / Prefs / Monitor / Display Off Monitoring / Pressure Sensor`.
-   **Profiles Active** `(dynamic)`\
    *%PACTIVE*\
    A comma-separated list of the currently active, named profiles in activation order. Duplicate names will appear on the list only once. The list always starts and ends with a comma to make matching easier, if it's not empty.
-   **Profiles Enabled** `(dynamic)`\
    *%PENABLED*\
    A comma-separated list of the currently enabled, named profiles in creation order. Duplicate names will appear on the list only once. The list always starts and ends with a comma to make matching easier, if it's not empty.
-   **Roaming**\
    *%ROAM*\
    **on** if device is roaming on the current telephone network, otherwise **off**.
-   **Root Available**\
    *%ROOT*\
    **yes** if root functions are available on this device, otherwise **no**.
-   **Screen** `(dynamic)`\
    *%SCREEN*\
    Whether the screen is on (value **on**) or off (value **off**).
-   **SDK Version**\
    *%SDK*\
    The numeric Android [SDK version](http://developer.android.com/reference/android/os/Build.VERSION_CODES.html) of the device.
-   **Silent Mode** `(dynamic)`\
    *%SILENT*\
    The current state of silent mode: **off**, **vibrate** or **on**.\
    From Android 5.0+ this variable is intended to only reflect whether the device is in vibrate mode (**vibrate**) or not (any other value), but the **on** value is included for backwards compatibility and set when the device is not in vibrate mode and the interrupt mode is **none** or **priority**.\
    See Also: variable *%INTERRUPT*, actions *Silent Mode* and *Interrupt Mode*.
-   **SIM Serial Number**\
    *%SIMNUM*\
    The serial number of the SIM card, if one is present and accessible.\
    If the SIM has not been unlocked it will not be available.
-   **SIM State**\
    *%SIMSTATE*\
    The current state of the SIM card.\
    One of **unknown**, **absent**, **pinrequired**, **pukrequired**, **netlocked** or **ready**.
-   **Speakerphone**\
    *%SPHONE*\
    Whether the speakerphone is **on** or **off**
-   **Speech** `(dynamic)`\
    *%SPEECH*\
    The current utterance as a result of a *Say* or *Say File* action, if applicable.
-   **Tasks Running** `(dynamic)`\
    *%TRUN*\
    A comma-separated list of any named tasks which are currently running. The list always starts and ends with a comma to make matching easier, if it's not empty.
-   **Telephone Network** `(dynamic, monitored)`\
    *%TNET*\
    The current telephony network operator the device is using.\
    May be unreliable on CDMA networks
-   **Temperature** `(monitored,dynamic)`\
    *%TEMP*\
    The current ambient temperature in degrees Celsius.\
    May not change when the device display is off, see `Menu / Prefs / Monitor / Display Off Monitoring / Temp. Sensor`.\
    See also: state *Temperature*.
-   **Text From/Date/Subject/Time** `(monitored)`\
    *%SMSRF / %SMSRN / %SMSRB / %MMSRS / %SMSRD / %SMSRT*\
    The sender address, name, body, subject, date and time of the last text (SMS or MMS) received.\
    These variables will be empty until the first time a text is received after they have been referenced because Tasker does not monitor texts unless it's needed.\
    *Name* is set to sender address of no contact could be looked up. It's unavailable on Android versions prior to 2.0.\
    *Body* (%SMSRB) is only set for SMSs.\
    *Subject* (%MMSRS) is only set for MMSs.
-   **Time**\
    *%TIME*\
    Current human-readable time separated by a period e.g. 10.59
-   **Tether** (dynamic)\
    *%TETHER*\
    A comma-separated list of enabled tethering forms i.e. connections over which another device can connect to this one in order to use its internet connection.\
    The possible forms are **wifi**, **usb** or **bt**.\
    BT will only be present when an actual client is connected via BT for using the devices network connection, whereas the others will be present as soon as the functionality is enabled (Android bug/limitation).
-   **Time MilliSeconds**\
    *%TIMEMS*\
    The current time in milliseconds.\
    (milliseconds since some time in January, 1970, if you must know).
-   **Time Seconds**\
    *%TIMES*\
    The current time in seconds.\
    (seconds since some time in January, 1970, if you must know).
-   **UI Mode** `(monitored,dynamic)`\
    *%UIMODE*\
    The current Android UI mode.\
    One of **car**, **desk**, **appliance**, **tv** (television), **watch**, **undef** (undefined) or **normal**.
-   **Uptime Seconds**\
    *%UPS*\
    The number of seconds since the device last booted.
-   **Volume - Alarm/Call/DTMF/Media/Notification/Ringer/System** `(dynamic)`\
    *%VOLA / %VOLC / %VOLD / %VOLM / %VOLN / %VOLR / %VOLS*\
    Current audio channel volume level.\
    On some devices, volume changes are not picked up dynamically, on others not when using the phone app.
-   **WiFi Info**\
    *%WIFII*\
    When connected to an Access Point (AP), shows human-readable data about the AP. When not connected, show details of the most recent Wifi scan results for nearby APs.\
    On Android 8.1+, may require basic location services to be enabled in Android settings.

-   **WiFi Status** `(dynamic)`\
    *%WIFI*\
    Whether WiFi is **on** or **off**. Note: if WiFi is enabling or disabled, in fact anything but enabled, it's classed as off.
-   **Wimax Status**\
    *%WIMAX*\
    Whether Wimax is **on** or **off**. Note: if Wimax is enabling or disabled, in fact anything but enabled, it's classed as off.
-   **Window Label** `(monitored,dynamic)`\
    *%WIN*\
    The label of the current window, which could be a full-screen activity or a dialog.\
    Not set if the label is unknown.\
    For some windows, the label might be that of the first item in the window e.g. a menu entry or even a button.
*/
    static AirplaneModeStatus(): "on" | "off" {
        return <"on" | "off">global("%AIR");
    }

    static AirplaneRadios(): "disabled" | string[] {
        const result =  <string>global("%AIRR");
        if (result !== "disabled") {
            return result.split(",").map(s => s.trim());
        }
        return result;
    }

    static BatteryLevel(): number {
        return <number>global("%BATT");
    }

    static BluetoothStatus(): "on" | "off" {
        return <"on" | "off">global("%BLUE");
    }

    static CalenderList(): CalendarEntry[] {
        const list = <string>global("%CALS");
        return list.split("\r?\n").map(s =>{
            const parts = s.trim().split(":");
            return {
                provider: parts[0],
                name: parts[1],
            }
            }
         );
    }

    static CalendarEventTitle(): string | undefined {
        return <string | undefined>global("%CALTITLE");
    }

    static CalendarEventDescription(): string | undefined {
        return <string | undefined>global("%CALDESCR");
    }

    static CalendarEventLocation(): string | undefined {
        return <string | undefined>global("%CALLOC");
    }

    static CallerName(): "?" | string | undefined {
        return <"?" | string | undefined>global("%CONAME");
    }

    static CallerNumber(): "0" | string | undefined {
        return <"0" | string | undefined>global("%CONUM");
    }

    static CallerDate(): string | undefined {
        return <string | undefined>global("%CONUM");
    }

    static CallerTime(): string | undefined {
        return <string | undefined>global("%CONUM");
    }
}

interface CalendarEntry {
    provider: string;
    name: string;
}
