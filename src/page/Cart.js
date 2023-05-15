import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, minusCount, plusCount } from "../store";
import { money } from "../func";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="cart_div1">
        <table className="cart_table">
          <thead className="cart_thead">
            <tr>
              <td>
                <input type="checkbox" className="cart_checkbox" />
              </td>
              <td>item</td>
              <td>name</td>
              <td>price</td>
              <td>size</td>
              <td>count</td>
              <td>total price</td>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((item) => {
              return (
                <tr key={item.id} className="cart_tr">
                  <td className="cart_td">
                    <input type="checkbox" className="cart_checkbox" />
                  </td>
                  <td>
                    <img src={item.img} alt="" className="cart_img" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} KRW</td>
                  <td>{item.size}</td>
                  <td>
                    <span
                      className="itemDetail_span1"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(minusCount(item.id));
                      }}>
                      -
                    </span>
                    <span className="itemDetail_span1">{item.count}</span>
                    <span
                      className="itemDetail_span1"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(plusCount(item.id));
                      }}>
                      +
                    </span>
                  </td>
                  <td>{money(item.price * item.count)} KRW</td>
                  <td>
                    <span
                      className="cart_delete"
                      onClick={() => {
                        dispatch(deleteItem(item.id));
                      }}>
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="cart_tr">
              <td className="cart_tfood1">Delete</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="cart_tfood2">Buy</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default Cart;
