import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

import { Link as LinkRouter } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 80%;
  border-radius: 10px;
  background-color: #242526;
  margin: 20px;
`

export const Photo = styled.img`
  width:100%;
  ${fadeIn()}
`

export const Profile = styled.div`
  display: flex;
  padding: 10px;
  width: min-content;
`

export const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`

export const Pic = styled.img`
  height: 100%;
`

export const Like = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #3e4042;
  margin: 10px;
  padding: 10px;
`

export const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 5px;
`

export const Likes = styled.div`
  margin: 5px;
`

export const Link = styled(LinkRouter)`
  width: min-content;
`
