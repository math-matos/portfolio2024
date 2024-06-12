import React from 'react'

export default function Main() {
  return (
    <>
    <div>
          <h1 className="items-center justify-center gap-3 text-center text-8xl font-bold">
            SOFTWARE <br /> DEVELOPER
          </h1>
        </div>
          <div className="mt-4 flex justify-center">
            <a href="https://www.linkedin.com/in/mathmatos/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                width={32}
                className="mr-4"
              />
            </a>
            <a href="https://github.com/math-matos" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={32}
                className="mr-4"
              />
            </a>
            <a href="https://www.instagram.com/prodigiocode/" target="_blank">
              <img
                src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"
                width={32}
                className="mr-4"
              />
            </a>
          </div>
    </>
  )
}
