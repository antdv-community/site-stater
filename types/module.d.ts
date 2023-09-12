declare module '*.vue' {
    import type { ComponentOptions } from 'vue'

    const Component: ComponentOptions
    export default Component
}

declare module '*.md' {
    import type { ComponentOptions } from 'vue'

    const Component: ComponentOptions
    export default Component
}

declare module 'vue-router/auto/routes' {
    import type {
        RouteRecordInfo,
        ParamValue,
        // these are other param helper types
        ParamValueOneOrMore,
        ParamValueZeroOrMore,
        ParamValueZeroOrOne,
    } from 'unplugin-vue-router'
    export interface RouteNamedMap {
        // the key is the name and should match the first generic of RouteRecordInfo
        'custom-dynamic-name': RouteRecordInfo<
          'custom-dynamic-name',
          '/added-during-runtime/[...path]',
          // these are the raw param types (accept numbers, strings, booleans, etc)
          { path: ParamValue<true> },
          // these are the normalized params as found in useRoute().params
          { path: ParamValue<false> }
        >
    }
}
