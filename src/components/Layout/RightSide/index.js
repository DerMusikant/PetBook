import React from 'react'

import { AddComponent as Add} from './add'

import { Sider, Adds } from './styles'

export const RightSide = ( props ) => (
        <Sider>
          <Adds>
            Adds
            <Add title='Web solutions by Valentin Rivetti' subtitle='The dragon inside your Website' link='http://DerMusikant.github.io'/>
          </Adds>
        </Sider>
  )
