import { useNavigate } from "react-router-dom";
export default function MkdSDK() {
  this._baseurl = "https://reacttask.mkdlabs.com";
  this._project_id = "reacttask";
  this._secret = "d9hedycyv6p7zw8xi34t9bmtsjsigy5t7";
  this._table = "";
  this._custom = "";
  this._method = "";

  const raw = this._project_id + ":" + this._secret;
  let base64Encode = btoa(raw);

  this.setTable = function (table) {
    this._table = table;
  };

  this.login = async function (email, password, role) {
    try {
      const header = {
        "Content-Type": "application/json",
        "x-project": base64Encode,
      };
      const payload = { email, password, role };
      const getResult = await fetch(`${this._baseurl}/v2/api/lambda/login`, {
        method: "POST",
        headers: header,
        body: JSON.stringify(payload),
      });
      const jsonGet = await getResult.json();
      return jsonGet;
    } catch (error) {
      console.log(error);
    }
  };

  this.getHeader = function () {
    return {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "x-project": base64Encode,
    };
  };

  this.baseUrl = function () {
    return this._baseurl;
  };

  this.callRestAPI = async function (payload, method) {
    console.log("payload:", payload, "method:", method);
    const header = {
      "Content-Type": "application/json",
      "x-project": base64Encode,
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    switch (method) {
      case "GET":
        const getResult = await fetch(
          this._baseurl + `/v1/api/rest/${this._table}/GET`,
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonGet = await getResult.json();
        console.log("table response:", jsonGet);
        if (getResult.status === 401) {
          throw new Error(jsonGet.message);
        }

        if (getResult.status === 403) {
          throw new Error(jsonGet.message);
        }
        return jsonGet;

      case "PAGINATE":
        if (!payload.page) {
          payload.page = 1;
        }
        if (!payload.limit) {
          payload.limit = 10;
        }
        const paginateResult = await fetch(
          this._baseurl + `/v1/api/rest/${this._table}/PAGINATE`,
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonPaginate = await paginateResult.json();
        console.log("jsonPaginate:", jsonPaginate);

        if (paginateResult.status === 401) {
          throw new Error(jsonPaginate.message);
        }

        if (paginateResult.status === 403) {
          throw new Error(jsonPaginate.message);
        }
        return jsonPaginate;
      default:
        break;
    }
  };

  this.check = async function (role) {
    let token = localStorage.getItem("storetoken");
    console.log(token, "token");
    try {
      if (token) {
        let payload = { role };
        const getResult = await fetch(`${this._baseurl}/v2/api/lambda/check`, {
          method: "POST",
          headers: {
            "x-project": base64Encode,
            Authorization: `Bearer${token}`,
          },
          body: JSON.stringify(payload),
        });
        const jsonGet = await getResult.json();
        console.log("jsonGet", jsonGet);
        return jsonGet;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return this;
}
