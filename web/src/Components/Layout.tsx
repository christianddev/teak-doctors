import React from "react"
import type { PropsWithChildren } from 'react'
import '../styles/layout.scss'

const Layout = ({ children }: PropsWithChildren<unknown>) => <>
{children}
</>

export default Layout
