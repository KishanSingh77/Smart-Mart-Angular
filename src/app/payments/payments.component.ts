import { Component, OnInit } from "@angular/core";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";
import { CartService } from "../../Services/cartService";
import { Product } from "../..//Models/Product";
import { parse } from "url";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.css"]
})
export class PaymentsComponent implements OnInit {
  public itemsInCart: Product[] = [];
  public cartTotalCost: Number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log("component loaded");

    console.log(this.cartService.itemsInCart);
    this.itemsInCart = this.cartService.itemsInCart;
    console.log("after priniting");

    this.cartSum();
  }

  cartSum() {
    this.itemsInCart.forEach(x => {
      console.log(x.price);
      this.cartTotalCost = +x.price + +this.cartTotalCost;
    });
    this.cartTotalCost = +this.cartTotalCost / 1.0;
  }
}
