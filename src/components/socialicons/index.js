import React from "react";
import "./style.css";
import { Icon } from '@iconify/react';
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}><Icon icon="mdi:github" />
            </a>
          </li>
        )}
        {socialprofils.notion && (
          <li>
            <a href={socialprofils.linkedin}>
              <Icon icon="simple-icons:notion" />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
            <Icon icon="uil:youtube" />
            </a>
          </li>
        )}
        
      </ul>
      <p>Watching Me</p>
    </div>
  );
};
