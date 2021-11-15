import { useEffect, useState, useRef } from 'react'

export function useLazyLoading () {

  const element = useRef(null)
  const [show, setShow] = useState(false)
  let observer

  const callback = (entries) => {
    if(entries[0].isIntersecting){
      setShow(true)
      observer.disconnect()
    }
  }


  useEffect(function () {
    if (element){
      observer = new window.IntersectionObserver(callback)
      observer.observe(element.current)
    }
  }, [element])

  return [show, element]
}
