> [Globals](../README.md) / "types/plugin"

# Module: "types/plugin"

## Index

### Interfaces

* [PluginApply](../interfaces/_types_plugin_.pluginapply.md)
* [PluginContext](../interfaces/_types_plugin_.plugincontext.md)

### Type aliases

* [InjectKeyframes](_types_plugin_.md#injectkeyframes)
* [Plugin](_types_plugin_.md#plugin)
* [PluginResult](_types_plugin_.md#pluginresult)
* [PluginTokenResult](_types_plugin_.md#plugintokenresult)
* [TokenParser](_types_plugin_.md#tokenparser)

## Type aliases

### InjectKeyframes

Ƭ  **InjectKeyframes**: (name: string, waypoints?: Record\<string, [Declarations](_index_.md#declarations)>) => string

*Defined in [types/plugin.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L5)*

___

### Plugin

Ƭ  **Plugin**: [PluginResult](_types_plugin_.md#pluginresult) \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_types_plugin_.md#pluginresult) \| [PluginTokenResult](_types_plugin_.md#plugintokenresult)

*Defined in [types/plugin.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L26)*

___

### PluginResult

Ƭ  **PluginResult**: string \| [Declarations](_index_.md#declarations) \| [] \| [Falsy](_index_.md#falsy)

*Defined in [types/plugin.ts:20](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L20)*

___

### PluginTokenResult

Ƭ  **PluginTokenResult**: (parse: [TokenParser](_types_plugin_.md#tokenparser)) => void

*Defined in [types/plugin.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L13)*

___

### TokenParser

Ƭ  **TokenParser**: (token: [Token](_index_.md#token)) => void

*Defined in [types/plugin.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L12)*