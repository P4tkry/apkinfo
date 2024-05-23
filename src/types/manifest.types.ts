declare type activity = {
    "_attributes": {
        'android:allowEmbedded'?: boolean;
        'android:allowTaskReparenting'?: boolean;
        'android:alwaysRetainTaskState'?: boolean;
        'android:autoRemoveFromRecents'?: boolean;
        'android:banner'?: string;
        'android:clearTaskOnLaunch'?: boolean;
        'android:colorMode'?: 'hdr' | 'wideColorGamut';
        'android:configChanges'?: ('mcc' | 'mnc' | 'locale' | 'touchscreen' | 'keyboard' | 'keyboardHidden' | 'navigation' | 'screenLayout' | 'fontScale' | 'uiMode' | 'orientation' | 'density' | 'screenSize' | 'smallestScreenSize')[];
        'android:directBootAware'?: boolean;
        'android:documentLaunchMode'?: 'intoExisting' | 'always' | 'none' | 'never';
        'android:enabled'?: boolean;
        'android:enabledOnBackInvokedCallback'?: boolean;
        'android:excludeFromRecents'?: boolean;
        'android:exported'?: boolean;
        'android:finishOnTaskLaunch'?: boolean;
        'android:hardwareAccelerated'?: boolean;
        'android:icon'?: string;
        'android:immersive'?: boolean;
        'android:label'?: string;
        'android:launchMode'?: 'standard' | 'singleTop' | 'singleTask' | 'singleInstance' | 'singleInstancePerTask';
        'android:lockTaskMode'?: 'normal' | 'never' | 'if_whitelisted' | 'always';
        'android:maxRecents'?: number;
        'android:maxAspectRatio'?: number;
        'android:multiprocess'?: boolean;
        'android:name'?: string;
        'android:noHistory'?: boolean;
        'android:parentActivityName'?: string;
        'android:persistableMode'?: 'persistRootOnly' | 'persistAcrossReboots' | 'persistNever';
        'android:permission'?: string;
        'android:process'?: string;
        'android:relinquishTaskIdentity'?: boolean;
        'android:requireContentUriPermissionFromCaller'?: 'none' | 'read' | 'readAndWrite' | 'readOrWrite' | 'write';
        'android:resizeableActivity'?: boolean;
        'android:screenOrientation'?: 'unspecified' | 'behind' | 'landscape' | 'portrait' | 'reverseLandscape' | 'reversePortrait' | 'sensorLandscape' | 'sensorPortrait' | 'userLandscape' | 'userPortrait' | 'sensor' | 'fullSensor' | 'nosensor' | 'user' | 'fullUser' | 'locked';
        'android:showForAllUsers'?: boolean;
        'android:stateNotNeeded'?: boolean;
        'android:supportsPictureInPicture'?: boolean;
        'android:taskAffinity'?: string;
        'android:theme'?: string;
        'android:uiOptions'?: 'none' | 'splitActionBarWhenNarrow';
        'android:windowSoftInputMode'?: 'stateUnspecified' | 'stateUnchanged' | 'stateHidden' | 'stateAlwaysHidden' | 'stateVisible' | 'stateAlwaysVisible' | 'adjustUnspecified' | 'adjustResize' | 'adjustPan';
    },
    "intent-filter"?: intentFilter[],
    "meta-data"?: metaData[],
    "layout"?: layout[],
}

declare type action = {
    "_attributes": {
        'android:name'?: string;
    }
}
declare type activityAlias = {
    "_attributes": {
        'android:enabled'?: boolean;
        'android:exported'?: boolean;
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
        'android:permission'?: string;
        'android:targetActivity'?: string;
    },
    "intent-filter"?: intentFilter[],
    "meta-data"?: metaData[],
}

declare type application = {
    "_attributes": {
        'android:allowTaskReparenting'?: boolean,
        'android:allowBackup'?: boolean,
        'android:allowClearUserData'?: boolean,
        'android:allowCrossUidActivitySwitchFromBelow'?: boolean,
        'android:allowNativeHeapPointerTagging'?: boolean,
        'android:appCategory'?: 'accessibility' | 'audio' | 'game' | 'image' | 'maps' | 'news' | 'productivity' | 'social' | 'video',
        'android:backupAgent'?: string,
        'android:backupInForeground'?: boolean,
        'android:banner'?: string,
        'android:dataExtractionRules'?: string,
        'android:debuggable'?: boolean,
        'android:description'?: string,
        'android:enabled'?: boolean,
        'android:extractNativeLibs'?: boolean,
        'android:fullBackupContent'?: string,
        'android:fullBackupOnly'?: boolean,
        'android:gwpAsanMode'?: 'always' | 'never',
        'android:hasCode'?: boolean,
        'android:hasFragileUserData'?: boolean,
        'android:hardwareAccelerated'?: boolean,
        'android:icon'?: string,
        'android:isGame'?: boolean,
        'android:isMonitoringTool'?: 'parental_control' | 'enterprise_management' | 'other',
        'android:killAfterRestore'?: boolean,
        'android:largeHeap'?: boolean,
        'android:label'?: string,
        'android:logo'?: string,
        'android:manageSpaceActivity'?: string,
        'android:name'?: string,
        'android:networkSecurityConfig'?: string,
        'android:permission'?: string,
        'android:persistent'?: boolean,
        'android:process'?: string,
        'android:restoreAnyVersion'?: boolean,
        'android:requestLegacyExternalStorage'?: boolean,
        'android:requiredAccountType'?: string,
        'android:resizeableActivity'?: boolean,
        'android:restrictedAccountType'?: string,
        'android:supportsRtl'?: boolean,
        'android:taskAffinity'?: string,
        'android:testOnly'?: boolean,
        'android:theme'?: string,
        'android:uiOptions'?: 'none' | 'splitActionBarWhenNarrow',
        'android:usesCleartextTraffic'?: boolean,
        'android:vmSafeMode'?: boolean
    },
    "activity"?: activity[],
    "activity-alias"?: activityAlias[],
    "service"?: service[],
    "receiver"?: receiver[],
    "provider"?: provider[],
    "meta-data"?: metaData[],
    "uses-library"?: usesLibrary[],

}

declare type category = {
    "_attributes": {
        'android:name'?: string;
    }
}

declare type compatibleScreens = {
    "screen":{
        "_attributes": {
            'android:screenDensity'?: "ldpi" | "mdpi" | "hdpi" | "xhdpi" | "280" | "360" | "420" | "480" | "560",
            'android:screenSize'?: "small" | "normal" | "large" | "xlarge";
        }
    }[]
}

declare type data = {
    "_attributes": {
        'android:host'?: string;
        'android:mimeType'?: string;
        'android:path'?: string;
        'android:pathPattern'?: string;
        'android:pathPrefix'?: string;
        'android:port'?: string;
        'android:scheme'?: string;
    }
}

declare type grantUriPermission = {
    "_attributes": {
        'android:path'?: string;
        'android:pathPattern'?: string;
        'android:pathPrefix'?: string;
    }
}

declare type instrumentation  ={
    "_attributes": {
        'android:functionalTest'?: boolean;
        'android:handleProfiling'?: boolean;
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
        'android:targetPackage'?: string;
        'android:targetProcesses'?: string;
    }
}

declare type intentFilter = {
    "_attributes": {
        'android:icon'?: string;
        'android:label'?: string;
        'android:priority'?: number;
    },
    "action": action[],
    "category"?: category[],
    "data"?: data[],
}

declare type layout = {
    "_attributes": {
        'android:defaultHeight'?: number;
        'android:defaultWidth'?: number;
        'android:gravity'?: string;
        'android:minHeight'?: number;
        'android:minWidth'?: number;
    }
}

declare type manifest ={
    "_attributes": {
        'xmlns:android': 'http://schemas.android.com/apk/res/android';
        "package": string;
        "android:sharedUserId"?: string;
        "android:sharedUserLabel"?: string;
        "android:sharedUserMaxSdkVersion"?: string;
        "android:versionCode": string;
        "android:versionName": string;
        "android:installLocation"?: 'auto' | 'internalOnly' | 'preferExternal';
    },
    "application": application,
    "compatible-screens"?: compatibleScreens,
    "instrumentation"?: instrumentation,
    "permission"?: permission[],
    "permission-group"?: permissionGroup[],
    "permission-tree"?: permissionTree[],
    "queries"?: queries,
    "supports-gl-texture"?: supportsGlTexture[],
    "supports-screens"?: supportsScreens,
    "uses-configuration"?: usesConfiguration[],
    "uses-feature"?: usesFeature[],
    "uses-permission"?: usesPermission[],
    "uses-sdk": usesSdk,
    "uses-permission-sdk-23"?: usesPermissionSdk23[],
}

declare type metaData = {
    "_attributes": {
        'android:name'?: string;
        'android:resource'?: string;
        'android:value'?: string;
    }
}

declare type pathPermission = {
    "_attributes": {
        'android:path'?: string;
        'android:pathPattern'?: string;
        'android:pathPrefix'?: string;
        'android:permission'?: string;
        'android:readPermission'?: string;
        'android:writePermission'?: string;
    }
}

declare type permission = {
    "_attributes": {
        'android:description'?: string;
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
        'android:permissionGroup'?: string;
        'android:protectionLevel'?: 'normal' | 'dangerous' | 'signature' | 'signatureOrSystem' | 'knownSigner';
    }
}

declare type permissionGroup = {
    "_attributes": {
        'android:description'?: string;
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
    }
}

declare type permissionTree = {
    "_attributes": {
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
    }
}

declare type profileable = {
    "_attributes": {
        'android:shell'?: boolean;
        'android:enabled'?: boolean;
    }
}

declare type property = {
    "_attributes": {
        'android:name'?: string;
        'android:resource'?: string;
        'android:value'?: string;
    }
}

declare type provider = {
    "_attributes": {
        "android:authorities": string[];
        "android:directBootAware": boolean;
        "android:enabled": boolean;
        "android:exported": boolean;
        "android:grantUriPermissions": boolean;
        "android:icon": string; // Assuming it's a path to drawable resource
        "android:initOrder": number;
        "android:label": string;
        "android:multiprocess": boolean;
        "android:name": string;
        "android:permission": string;
        "android:process": string;
        "android:readPermission": string;
        "android:syncable": boolean;
        "android:writePermission": string;
    },
    "grant-uri-permission"?: grantUriPermission[],
    "meta-data"?: metaData[],
    "intent-filter"?: intentFilter[],
    "path-permission"?: pathPermission[],
}

declare type queries ={
    //TODO: Implement this type
}

declare type receiver = {
    "_attributes": {
        'android:directBootAware'?: boolean;
        'android:enabled'?: boolean;
        'android:exported'?: boolean;
        'android:icon'?: string;
        'android:label'?: string;
        'android:name'?: string;
        'android:permission'?: string;
        'android:process'?: string;
    },
    "intent-filter"?: intentFilter[],
    "meta-data"?: metaData[],
}

declare type service = {
    "_attributes": {
        "android:description"?: string;
        "android:directBootAware": boolean;
        "android:enabled": boolean;
        "android:exported": boolean;
        "android:foregroundServiceType"?: "camera" | "connectedDevice" |
            "dataSync" | "health" | "location" |
            "mediaPlayback" | "mediaProjection" |
            "microphone" | "phoneCall" |
            "remoteMessaging" | "shortService" |
            "specialUse" | "systemExempted";
        "android:icon": string;
        "android:isolatedProcess"?: boolean;
        "android:label": string;
        "android:name": string;
        "android:permission": string;
        "android:process": string;
    },
    "intent-filter"?: intentFilter[],
    "meta-data"?: metaData[],
}

declare type supportsGlTexture = {
    "_attributes": {
        'android:name'?: string;
    }
}

declare type supportsScreens = {
    "_attributes": {
        "android:resizeable": boolean;
        "android:smallScreens": boolean;
        "android:normalScreens": boolean;
        "android:largeScreens": boolean;
        "android:xlargeScreens": boolean;
        "android:anyDensity": boolean;
        "android:requiresSmallestWidthDp"?: number;
        "android:compatibleWidthLimitDp"?: number;
        "android:largestWidthLimitDp"?: number;
    }
}

declare type usesConfiguration = {
    "_attributes": {
        'android:reqFiveWayNav'?: boolean;
        'android:reqHardKeyboard'?: boolean;
        'android:reqKeyboardType'?: 'nokeys' | 'qwerty' | 'twelvekey'|"undefined";
        'android:reqNavigation'?: "undefined" | "nonav" | "dpad" | "trackball" | "wheel";
        'android:reqTouchScreen'?: 'undefined' | 'notouch' | 'stylus' | 'finger'|"";
    }
}

declare type usesFeature = {
    "_attributes": {
        'android:name'?: string;
        'android:required'?: boolean;
        'android:glEsVersion'?: string;
    }
}

declare type usesLibrary = {
    "_attributes": {
        'android:name'?: string;
        'android:required'?: boolean;
    }
}

declare type usesNativeLibrary = {
    "_attributes": {
        'android:name'?: string;
        'android:required'?: boolean;
    }
}

declare type usesPermission = {
    "_attributes": {
        'android:name'?: string;
        'android:maxSdkVersion'?: string;
    }
}

declare type usesPermissionSdk23 = {
    "_attributes": {
        'android:name'?: string;
        'android:maxSdkVersion'?: number;
    }
}

declare type usesSdk = {
    "_attributes": {
        'android:minSdkVersion': string;
        'android:targetSdkVersion': string;
        'android:maxSdkVersion'?: string;
    }
}

declare type xmlParsedManifest = {
    "_declaration": {
        "_attributes": {
            "version": string;
            "encoding": string;
            "standalone": string;
        }
    },
    manifest: manifest
}