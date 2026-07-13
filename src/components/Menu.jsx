import React from 'react'

function Menu() {

  return (
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <a class="btn btn-ghost text-xl">ME</a>
        </div>

        <div class="navbar-center">
            <input type="text" placeholder="Buscar libro" class="input input-bordered w-50 md:w-100" />
        </div>
        <div class="navbar-end">
            {/* <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div> */}
           
        
        </div>
    </div>
  )
}

export default Menu