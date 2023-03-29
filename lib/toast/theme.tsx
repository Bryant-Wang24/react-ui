import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GridThemeProvider, StyledBootstrapGrid } from 'styled-bootstrap-grid'
import { transition } from './transition'

const theme = {
  /**
   * @see https://next.ant.design/docs/spec/colors-cn
   * @see https://material-ui.com/customization/palette/
   */
  color: {
    success: '#01ab5d',
    info: '#2196f3',
    warning: '#ff9800',
    error: '#ec6941',
  },
  transition,
}

export type ThemeType = typeof theme & { styledBootstrapGrid: StyledBootstrapGrid }
export const MyThemeProvider: React.FC<{ children: React.ReactElement }> = props => {
  return (
    <ThemeProvider theme={theme as ThemeType}>
      <GridThemeProvider>{props.children}</GridThemeProvider>
    </ThemeProvider>
  )
}
