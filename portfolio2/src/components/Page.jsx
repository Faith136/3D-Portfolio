/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-black pb-4">
        Page: {props.number}
      </p>
    </div>
  );
});
Page.displayName = Page;
export default Page;