import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import CSS from './SideBar.module.css'


const SideBar = () => {
    const activelink = useLocation();
    return (
        <div>
            <div>
                <p className={CSS['category']}>Category</p>
                <ul className={CSS['category-list']}>
                    <li><Link className={activelink.pathname === '/addcategory' ? `${CSS['active']} ${CSS['category-link']}`: `${CSS['category-link']}`} to={'/addcategory'}>Add Category</Link></li>
                    <li><Link className={activelink.pathname === '/deletecategory' ? `${CSS['active']} ${CSS['category-link']}`: `${CSS['category-link']}`} to={'/deletecategory'}>Delete Category</Link></li>
                    <li><Link className={activelink.pathname === '/updatecategory' ? `${CSS['active']} ${CSS['category-link']}`: `${CSS['category-link']}`} to={'/updatecategory'}>Update Category</Link></li>
                </ul>
            </div>
            <div>
                <p className={CSS['product']}>Product</p>
                <ul className={CSS['product-list']}>
                    <li><Link className={activelink.pathname === '/addproduct' ? `${CSS['active']} ${CSS['product-link']}`: `${CSS['category-link']}`} to={'/addproduct'}>Add Products</Link></li>
                    <li><Link className={activelink.pathname === '/deleteproduct' ? `${CSS['active']} ${CSS['product-link']}`: `${CSS['category-link']}`} to={'/deleteproduct'}>Delete Products</Link></li>
                    <li><Link className={activelink.pathname === '/updateproduct' ? `${CSS['active']} ${CSS['product-link']}`: `${CSS['category-link']}`} to={'/updateproduct'}>Update Products</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar