import React from 'react'

import { Sider, Add, Icon, Description, Sub, ImgContainer, Img } from './styles'

export const AddComponent = ( { link, title, subtitle, img } ) => (
            <a href={link}>
              <Add>
                {
                  img ?
                  <Img src={img} />
                  :
                  <Icon />
                }
                <Description>
                  <h4>{title}</h4>
                  <Sub>{subtitle}</Sub>
                </Description>
              </Add>
            </a>
  )
