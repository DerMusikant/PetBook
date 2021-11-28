import React from 'react'
import { FaDragon } from 'react-icons/fa'

import { Sider, Add, Icon, Description } from './styles'

export const RightSide = ( props ) => (
        <Sider>
          <div>
            Adds
            <a href='http://DerMusikant.github.io'>
              <Add>
                <Icon />
                <Description>
                  <h4>Web solutions by Valentin Rivetti</h4>
                  <p>DerMusikant.github.io</p>
                </Description>
              </Add>
            </a>
          </div>
        </Sider>
  )
