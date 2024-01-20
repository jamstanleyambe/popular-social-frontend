import styled from "styled-components";

import React from "react";

const Widget = () => {
  return (
    <WidgetWrapper>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=7000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1790751714696921"
        width="500"
        height="7000"
        style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allow="encrypted-media"
            title="Facebook Widget"
        ></iframe>
    </WidgetWrapper>
  );
};

const WidgetWrapper = styled.div``;

export default Widget;
