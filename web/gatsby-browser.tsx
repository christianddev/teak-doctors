
import React from 'react'
import type { GatsbyBrowser } from 'gatsby'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/inter/700.css'

import Layout from './src/Components/Layout'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
  props
}) => {
  console.log('props', props)
  return (
  <Layout>{element}</Layout>
  )
}