import { QuartzTransformerPlugin } from "../types"  
  
export interface Options {  
  pattern?: RegExp  
}  
  
const defaultOptions: Options = {  
  pattern: /<!-- hide -->[\s\S]*?<!-- \/hide -->/g  
}  
  
export const HideContent: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {  
  const opts = { ...defaultOptions, ...userOpts }  
    
  return {  
    name: "HideContent",  
    textTransform(_ctx, src) {  
      if (opts.pattern) {  
        src = src.replace(opts.pattern, "")  
      }  
      return src  
    }  
  }  
}