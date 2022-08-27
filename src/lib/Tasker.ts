export function alarmVol(level: number, display: boolean, sound: boolean): boolean {
    console.log("running 'alarmVol'");
    return true
}

export function audioRecord(destPath: string, source: string, codec: string, format: string): boolean {
    console.log("running 'audioRecord'");
    return true
}

export function audioRecordStop(): boolean {
    console.log("running 'audioRecordStop'");
    return true
}

export function browseURL(URL: string): boolean {
    console.log("running 'browseURL'");
    return true
}

export function button(name: string): boolean {
    console.log("running 'button'");
    return true
}

export function call(num: string, autoDial: boolean): boolean {
    console.log("running 'call'");
    return true
}

export function callBlock(numMatch: string, showInfo: boolean): boolean {
    console.log("running 'callBlock'");
    return true
}

export function callDivert(fromMatch: string, to: string, showInfo: boolean): boolean {
    console.log("running 'callDivert'");
    return true
}

export function callRevert(numMatch: string): boolean {
    console.log("running 'callRevert'");
    return true
}

export function carMode(onFlag: boolean): boolean {
    console.log("running 'carMode'");
    return true
}

export function clearKey(keyName: string): boolean {
    console.log("running 'clearKey'");
    return true
}

export function composeEmail(to: string, subject: string, message: string): boolean {
    console.log("running 'composeEmail'");
    return true
}

export function composeMMS(to: string, subject: string, message: string, attachmentPath: string): boolean {
    console.log("running 'composeMMS'");
    return true
}

export function composeSMS(to: string, message: string): boolean {
    console.log("running 'composeSMS'");
    return true
}

export function convert(val: string, conversionType: string): unknown {
    console.log("running 'convert'");
    return {}
}

export function createDir(dirPath: string, createParent: boolean, useRoot: boolean): boolean {
    console.log("running 'createDir'");
    return true
}

export function createScene(sceneName: string): boolean {
    console.log("running 'createScene'");
    return true
}

export function cropImage(fromLeftPercent: number, fromRightPercent: number, fromTopPercent: number, fromBottomPercent: number): boolean {
    console.log("running 'cropImage'");
    return true
}

export function decryptDir(path: string, key: string, removeKey: boolean): boolean {
    console.log("running 'decryptDir'");
    return true
}

export function decryptFile(path: string, key: string, removeKey: boolean): boolean {
    console.log("running 'decryptFile'");
    return true
}

export function deleteDir(dirPath: string, recurse: boolean, useRoot: boolean): boolean {
    console.log("running 'deleteDir'");
    return true
}

export function deleteFile(filePath: string, shredTimes: number, useRoot: boolean): boolean {
    console.log("running 'deleteFile'");
    return true
}

export function destroyScene(sceneName: string): boolean {
    console.log("running 'destroyScene'");
    return true
}

export function displayAutoBright(onFlag: boolean): boolean {
    console.log("running 'displayAutoBright'");
    return true
}

export function displayRotate(onFlag: boolean): boolean {
    console.log("running 'displayRotate'");
    return true
}

export function displayTimeout(hours: number, minutes: number, seconds: number): boolean {
    console.log("running 'displayTimeout'");
    return true
}

export function dpad(direction: string, noRepeats: number): boolean {
    console.log("running 'dpad'");
    return true
}

export function enableProfile(name: string, enable: boolean): boolean {
    console.log("running 'enableProfile'");
    return true
}

export function encryptDir(path: string, keyName: string, rememberKey: boolean, shredOriginal: boolean): boolean {
    console.log("running 'encryptDir'");
    return true
}

export function elemBackColour(scene: string, element: string, startColour: string, endColour: string): boolean {
    console.log("running 'elemBackColour'");
    return true
}

export function elemBorder(scene: string, element: string, width: number, colour: string): boolean {
    console.log("running 'elemBorder'");
    return true
}

export function elemPosition(scene: string, element: string, orientation: string, x: number, y: number, animMS: number): boolean {
    console.log("running 'elemPosition'");
    return true
}

export function elemText(scene: string, element: string, position: string, text: string): boolean {
    console.log("running 'elemText'");
    return true
}

export function elemTextColour(scene: string, element: string, colour: string): boolean {
    console.log("running 'elemTextColour'");
    return true
}

export function elemTextSize(scene: string, element: string, size: number): boolean {
    console.log("running 'elemTextSize'");
    return true
}

export function elemVisibility(scene: string, element: string, visible: boolean, animationTimeMS: number): boolean {
    console.log("running 'elemVisibility'");
    return true
}

export function endCall(): boolean {
    console.log("running 'endCall'");
    return true
}

export function encryptFile(path: string, keyName: string, rememberKey: boolean, shredOriginal: boolean): boolean {
    console.log("running 'encryptFile'");
    return true
}

export function enterKey(
    title: string,
    keyName: string,
    showOverKeyguard: boolean,
    confirm: boolean,
    background: string,
    layout: string,
    timeoutSecs: number
): boolean {
    console.log("running 'enterKey'");
    return true
}

export function filterImage(mode: string, value: number): boolean {
    console.log("running 'filterImage'");
    return true
}

export function flipImage(horizontal: boolean): boolean {
    console.log("running 'flipImage'");
    return true
}

export function exit(): void {
    console.log("running 'exit'");
}

export function flash(message: string): void {
    console.log("running 'flash'");
}

export function flashLong(message: string): void {
    console.log("running 'flashLong'");
}

export function getLocation(source: string, keepTracking: boolean, timeoutSecs: number): boolean {
    console.log("running 'getLocation'");
    return true
}

export function getVoice(prompt: string, languageModel: string, timeout: number): string {
    console.log("running 'getVoice'");
    return ""
}

export function goHome(screenNum: number): void {
    console.log("running 'goHome'");
}

export function haptics(onFlag: boolean): boolean {
    console.log("running 'haptics'");
    return true
}

export function hideScene(sceneName: string): boolean {
    console.log("running 'hideScene'");
    return true
}

export function global(varName: string): unknown {
    console.log("running 'global'");
    return {}
}

export function listFiles(dirPath: string, hiddenToo: boolean): string {
    console.log("running 'listFiles'");
    return ""
}

export function loadApp(name: string, data: string, excludeFromRecents: boolean): boolean {
    console.log("running 'loadApp'");
    return true
}

export function loadImage(uri: string): boolean {
    console.log("running 'loadImage'");
    return true
}

export function lock(title: string, code: string, allowCancel: boolean, rememberCode: boolean, fullScreen: boolean, background: string, layout: string): boolean {
    console.log("running 'lock'");
    return true
}

export function local(varName: string): unknown {
    console.log("running 'local'");
    return {}
}

export function mediaControl(action: string): boolean {
    console.log("running 'mediaControl'");
    return true
}

export function micMute(shouldMute: boolean): boolean {
    console.log("running 'micMute'");
    return true
}

export function mobileData(set: boolean): boolean {
    console.log("running 'mobileData'");
    return true
}

export function musicBack(seconds: number): boolean {
    console.log("running 'musicBack'");
    return true
}

export function musicPlay(path: string, offsetSecs: number, loop: boolean, stream: string): boolean {
    console.log("running 'musicPlay'");
    return true
}

export function musicSkip(seconds: number): boolean {
    console.log("running 'musicSkip'");
    return true
}

export function musicStop(): boolean {
    console.log("running 'musicStop'");
    return true
}

export function nightMode(onFlag: boolean): boolean {
    console.log("running 'nightMode'");
    return true
}

export function popup(title: string, text: string, showOverKeyguard: boolean, background: string, layout: string, timeoutSecs: number): boolean {
    console.log("running 'popup'");
    return true
}

export function performTask(
    taskName: string,
    priority: number,
    parameterOne: string,
    parameterTwo: string,
    returnVariable: string,
    stop: boolean,
    variablePassthrough: boolean,
    variablePassthroughList: string,
    resetReturnVariable: boolean
): boolean {
    console.log("running 'performTask'");
    return true
}

export function profileActive(profileName: string): boolean {
    console.log("running 'profileActive'");
    return true
}

export function pulse(onFlag: boolean): boolean {
    console.log("running 'pulse'");
    return true
}

export function readFile(path: string): unknown {
    console.log("running 'readFile'");
    return {}
}

export function reboot(type: string): boolean {
    console.log("running 'reboot'");
    return true
}

export function resizeImage(width: number, height: number): boolean {
    console.log("running 'resizeImage'");
    return true
}

export function rotateImage(dir: string, degrees: number): boolean {
    console.log("running 'rotateImage'");
    return true
}

export function saveImage(path: string, qualityPercent: number, deleteFromMemoryAfter: boolean): boolean {
    console.log("running 'saveImage'");
    return true
}

export function say(text: string, engine: string, voice: string, stream: string, pitch: number, speed: number): boolean {
    console.log("running 'say'");
    return true
}

export function setAirplaneMode(setOn: boolean): boolean {
    console.log("running 'setAirplaneMode'");
    return true
}

export function setAirplaneRadios(disableRadios: string): boolean {
    console.log("running 'setAirplaneRadios'");
    return true
}

export function setAlarm(hour: number, min: number, message: string, confirmFlag: boolean): boolean {
    console.log("running 'setAlarm'");
    return true
}

export function setAutoSync(setOn: boolean): boolean {
    console.log("running 'setAutoSync'");
    return true
}

export function scanCard(path: string): boolean {
    console.log("running 'scanCard'");
    return true
}

export function setBT(setOn: boolean): boolean {
    console.log("running 'setBT'");
    return true
}

export function setBTID(toSet: string): boolean {
    console.log("running 'setBTID'");
    return true
}

export function setGlobal(varName: string, newValue: string): void {
    console.log("running 'setGlobal'");
}

export function setKey(keyName: string, passphrase: string): boolean {
    console.log("running 'setKey'");
    return true
}

export function setLocal(varName: string, newValue: string): void {
    console.log("running 'setLocal'");
}

export function setClip(text: string, appendFlag: boolean): boolean {
    console.log("running 'setClip'");
    return true
}

export function settings(screenName: string): boolean {
    console.log("running 'settings'");
    return true
}

export function setWallpaper(path: string): boolean {
    console.log("running 'setWallpaper'");
    return true
}

export function setWifi(setOn: boolean): boolean {
    console.log("running 'setWifi'");
    return true
}

export function shell(command: string, asRoot: boolean, timoutSecs: number): unknown {
    console.log("running 'shell'");
    return {}
}

export function showScene(name: string, displayAs: string, hoffset: number, voffset: number, showExitIcon: boolean, waitForExit: boolean): boolean {
    console.log("running 'showScene'");
    return true
}

export function shutdown(): boolean {
    console.log("running 'shutdown'");
    return true
}

export function silentMode(mode: string): boolean {
    console.log("running 'silentMode'");
    return true
}

export function sl4a(scriptName: string, inTerminal: boolean): boolean {
    console.log("running 'sl4a'");
    return true
}

export function soundEffects(setTo: boolean): boolean {
    console.log("running 'soundEffects'");
    return true
}

export function speakerPhone(setFlag: boolean): boolean {
    console.log("running 'speakerPhone'");
    return true
}

export function statusBar(expanded: boolean): boolean {
    console.log("running 'statusBar'");
    return true
}

export function stayOn(mode: string): boolean {
    console.log("running 'stayOn'");
    return true
}

export function stopLocation(): boolean {
    console.log("running 'stopLocation'");
    return true
}

export function systemLock(): boolean {
    console.log("running 'systemLock'");
    return true
}

export function taskRunning(taskName: string): boolean {
    console.log("running 'taskRunning'");
    return true
}

export function takePhoto(camera: number, fileName: string, resolution: string, insertGallery: boolean): boolean {
    console.log("running 'takePhoto'");
    return true
}

export function type(text: string, repeatCount: number): boolean {
    console.log("running 'type'");
    return true
}

export function unzip(zipPath: string, deleteZipAfter: boolean): boolean {
    console.log("running 'unzip'");
    return true
}

export function usbTether(set: boolean): void {
    console.log("running 'usbTether'");
}

export function vibrate(durationMilliseconds: number): void {
    console.log("running 'vibrate'");
}

export function vibratePattern(pattern: string): void {
    console.log("running 'vibratePattern'");
}

export function wait(durationMilliseconds: number): void {
    console.log("running 'wait'");
}

export function wifiTether(set: boolean): boolean {
    console.log("running 'wifiTether'");
    return true
}

export function writeFile(path: string, text: string, append: boolean): boolean {
    console.log("running 'writeFile'");
    return true
}

export function zip(path: string, level: number, deleteOriginalAfter: boolean): boolean {
    console.log("running 'zip'");
    return true
}
