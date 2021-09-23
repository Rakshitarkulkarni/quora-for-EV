import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
    console.log(auth);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_logo">
          <img
            src="data:image/jpg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABgAAAAAQAAAGAAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAPQBAAADoAQAAQAAAPQBAAAAAAAA/+EN82h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIxLTA5LTIxPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmI0YWQ0ODhiLTA1ZmEtNDI2Ni04NDJlLTQ1NGIwYmRlNGI1YTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5RdW9yYSBvbiBFVjwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5Tb3diaGFneWEgSmFuYXJkaGFuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgB9AH0AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooPAoAKK8g+Inxr0/QLmXT9BhTUr+MlZJC2IY29Mjlj7DA9+1cxb+IvjJrEAvbDTzBbsNyqLeJMj2Eh3EV2wwFWUVKVop93Y5JYyCfLHX0Poaivm2w+NHivw9qn2LxdpaS7CPMRojBMB6j+Ej8OfWvefCfiXTfFWjx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3A4zgfkKk0rStP0i3aDSrG1soGYuY7eJY1LYAyQoHOAOfartFHM7WFyq97GT4g8OaP4hijj1rT7e8WMkp5qZK564PUVLomiaZoVr9m0ext7OAnJWFAuT6n1Pua0aKfPK3LfQOSN+a2oUUUVJRz8ngrwvI7PJ4d0ZnYlmY2URJPqflpv/AAg/hX/oW9F/8AYv/ia6Kir9pLuR7OHY53/hB/Cv/Qt6L/4Axf8AxNXdK8OaJpFw1xpWkafZTsuwyW9skbFcg4yoBxkDj2FatFJzk92CpxWqQUUUVJZi6Z4V0LS9SfUNP0qzt71926aOIBjk5PPvW1RRTlJy1buJRUdgooopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k="
            alt=""
          />
        </div>
        <div className="login_desc">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="login_auth">
          <div className="login_authOptions">
            <div className="login_authOption">
              <img
                className="login_googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login_authOption">
              <img
                className="login_googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login_authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login_emailPass">
            <div className="login_label">
              <h4>Login</h4>
            </div>
            <div className="login_inputFields">
              <div className="login_inputField">
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"/>
              </div>
              <div className="login_inputField">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"/>
              </div>
            </div>
            <div className="login_forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login_lang">
          <p>हिन्दी</p>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="login_footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
