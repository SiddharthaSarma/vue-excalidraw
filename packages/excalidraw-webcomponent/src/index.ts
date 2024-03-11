import r2wc from '@r2wc/react-to-web-component'
import {Header} from './Header'
import {Excalidraw} from '@excalidraw/excalidraw'

customElements.define(
  "rwc-header", r2wc(Header, {
    props: { text: "string" },
  }),
);
customElements.define(
  "rwc-excalidraw", r2wc((Excalidraw as any), {
    props: {
      theme: {text: "string", default: "light"},
    }
  }),
);