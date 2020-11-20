import type { Instance, Injector } from 'beamwind'

import { createInstance, virtualInjector } from 'beamwind'

import preflight from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, hash: false })
})

test('add preflight styles', () => {
  instance.setup(preflight)

  expect(instance.cx('text-primary')).toBe('text-primary')

  expect(injector.target).toMatchObject([
    ':root{-moz-tab-size:4;tab-size:4}',
    'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}',
    'button{background-color:transparent;background-image:none}',
    "button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}",
    'button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}',
    'fieldset{margin:0;padding:0}',
    'ol,ul{list-style:none;margin:0;padding:0}',
    'html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}',
    'body{margin:0;font-family:inherit;line-height:inherit}',
    '*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}',
    'hr{height:0;color:inherit;border-top-width:1px}',
    'img{border-style:solid}',
    'textarea{resize:vertical}',
    'input::placeholder,textarea::placeholder{color:#9ca3af}',
    'button,[role="button"]{cursor:pointer}',
    'table{text-indent:0;border-color:inherit;border-collapse:collapse}',
    'h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}',
    'a{color:inherit;text-decoration:inherit}',
    'button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;margin:0;padding:0;line-height:inherit;color:inherit}',
    'button,select{text-transform:none}',
    '::-moz-focus-inner{border-style:none;padding:0}',
    ':-moz-focusring{outline:1px dotted ButtonText}',
    ':-moz-ui-invalid{box-shadow:none}',
    'legend{padding:0}',
    'progress{vertical-align:baseline}',
    '::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}',
    '[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}',
    '::-webkit-search-decoration{-webkit-appearance:none}',
    '::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}',
    'summary{display:list-item}',
    'abbr[title]{text-decoration:underline dotted}',
    'b,strong{font-weight:bolder}',
    'pre,code,kbd,samp{font-family:ui-monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}',
    'sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}',
    'sub{bottom:-0.25em}',
    'sup{top:-0.5em}',
    'img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}',
    'img,video{max-width:100%;height:auto}',
    '.text-primary{color:#0d3880}',
  ])
})

test('add preflight styles with custom theme', () => {
  instance.setup([
    preflight,
    {
      theme: {
        fontFamily: { sans: 'ui-sans-serif', mono: 'ui-monospace' },
        borderColor: { DEFAULT: '#222' },
        placeholderColor: { DEFAULT: '#333' },
      },
    },
  ])

  expect(instance.cx('text-primary')).toBe('text-primary')

  expect(injector.target).toContain(
    'html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif}',
  )
  expect(injector.target).toContain(
    '*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#222}',
  )
  expect(injector.target).toContain('input::placeholder,textarea::placeholder{color:#333}')
  expect(injector.target).toContain('pre,code,kbd,samp{font-family:ui-monospace;font-size:1em}')
})

test('add preflight styles with theme missing some values', () => {
  instance.setup([
    preflight,
    {
      theme: {
        fontFamily: { sans: 'ui-sans-serif', mono: 'ui-monospace' },
        borderColor: { DEFAULT: '' },
        placeholderColor: { DEFAULT: '' },
      },
    },
  ])

  expect(instance.cx('text-primary')).toBe('text-primary')

  expect(injector.target).toContain(
    '*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}',
  )
  expect(injector.target).toContain('input::placeholder,textarea::placeholder{color:#a1a1aa}')
})
