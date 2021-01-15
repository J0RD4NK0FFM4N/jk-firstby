/** @jsx jsx */
// import React from "react";
import { css, jsx } from '@emotion/react'
import Columns from '../components/columns.js'
import CanvasDraw from "react-canvas-draw";

// const StickyCanvas = ({chilren}) => (
//   <div
//     css={{
//       backgroundColor: "rgba(153,0,17,.6)",
//       position: "sticky",
//       top: "0%",
//       padding: "20px",
//     }}
//   >
//   <h1>I'm a sticky thing!</h1>
//   {children}
//   </div>
//)
const StickyThing = ({children}) => (
  <div
    css={{
      backgroundColor: "rgba(153,0,17,.6)",
      position: "sticky",
      top: "0%",
      padding: "20px",
    }}
  >
  {!children && <h1>I'm a sticky thing!</h1>}
  {children && children}
  </div>
)
const Style2 = () => {
  return(
    <div>
      <p>is it hooked up</p>
      <StickyThing>
      <CanvasDraw/>
      </StickyThing>

      <Columns>
      <div
        css={{
          backgroundColor:"rgba(245,223,77,1)",
          padding:"20px"
        }}
      >
        one and one and one
        <StickyThing>
        <CanvasDraw/>
        </StickyThing>
        </div>
        <div
          css={{
            backgroundColor:"rgba(76,150,179,1)",
            height:"700px",
            margin:"20px",
          }}
        >
        two or two or two
        <StickyThing/>
        </div>
      </Columns>
      <Columns>
      <div
        css={{
          backgroundColor:"rgba(245,223,77,1)",
          padding:"20px",
          height:"100px",
        }}
      >
        one and one and one
        </div>
        <div
          css={{
            backgroundColor:"rgba(76,150,179,1)",
            height:"200px",
          }}
        >
        two or two or two
        </div>
        <div
          css={{
            backgroundColor:"rgba(245,223,77,1)",
            padding:"20px",
            height:"100px",
          }}
        >
          one and one and one
          </div>
          <div
            css={{
              backgroundColor:"rgba(76,150,179,1)",
              height:"200px",
            }}
          >
          two or two or two
          </div>
          <div
            css={{
              backgroundColor:"rgba(245,223,77,1)",
              padding:"20px",
              height:"100px",
            }}
          >
            one and one and one
            </div>
            <div
              css={{
                backgroundColor:"rgba(76,150,179,1)",
                height:"200px",
              }}
            >
            two or two or two
            <StickyThing/>

            </div>
            <div
              css={{
                backgroundColor:"rgba(245,223,77,1)",
                padding:"20px",
                height:"100px",
              }}
            >
              one and one and one
              </div>
              <div
                css={{
                  backgroundColor:"rgba(76,150,179,1)",
                  height:"200px",
                }}
              >
              two or two or two
              </div>
              <div
                css={{
                  backgroundColor:"rgba(245,223,77,1)",
                  padding:"20px",
                  height:"100px",
                }}
              >
                one and one and one
                <StickyThing/>

                </div>
                <div
                  css={{
                    backgroundColor:"rgba(76,150,179,1)",
                    height:"200px",
                  }}
                >
                two or two or two
                </div>
                <div
                  css={{
                    backgroundColor:"rgba(245,223,77,1)",
                    padding:"20px",
                    height:"100px",
                  }}
                >
                  one and one and one
                  </div>
                  <StickyThing/>

                  <div
                    css={{
                      backgroundColor:"rgba(76,150,179,1)",
                      height:"200px",
                    }}
                  >
                  two or two or two
                  </div>
      </Columns>
      <StickyThing/>

    </div>
  )
}

export default Style2;
