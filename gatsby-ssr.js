export { default as wrapRootElement } from './src/state/ReduxWrapper';
let HOSTNAME = "http://localhost/gatsby-wordpress/app/themes/base_theme/framework/public";
const modifyPrefix = comp => {
    if (comp.props && comp.props.href) {
      return {
        ...comp,
        props: {
          ...comp.props,
          href: `${HOSTNAME}${comp.props.href}`,
        },
      }
    } else if (comp.props && comp.props.src) {
      return {
        ...comp,
        props: {
          ...comp.props,
          src: `${HOSTNAME}${comp.props.src}`,
        },
      }
    } else {
      return comp
    }
  }
  
  export const onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
  }) => {
    replaceHeadComponents(getHeadComponents().map(modifyPrefix))
    replacePreBodyComponents(getPreBodyComponents().map(modifyPrefix))
    replacePostBodyComponents(getPostBodyComponents().map(modifyPrefix))
  }