import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    },
    {
        path: 'seller-home',
        component: SellerHomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller-add-product',
        component: SellerAddProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller-product-list',
        component: SellerProductListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller-update-product/:id',
        component: SellerUpdateProductComponent,
        canActivate: [AuthGuard]
    }
];


