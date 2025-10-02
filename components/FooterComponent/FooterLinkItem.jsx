"use client";

import Link from "next/link";
import React from "react";

const FooterLinkItem = ({ data }) => {
  if (!data) return null; // safety check

  return (
    <div className="footer-widget">
      <h4 className="footer-widget-title">{data.title}</h4>
      <nav aria-label={data.title}>
        <ul>
          {data.list.map((single) => (
            <li key={single.id}>
              <Link href={single.url}>
                {single.text}{" "}
                {single?.badge && <span className="ft-badge">{single.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinkItem;
