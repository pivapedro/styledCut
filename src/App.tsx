import React from "react";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import styled from "styled-components";
import { Button } from "./components/Button";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 2rem;
  border: grey solid 1.2px;
  code {
    background-color: #d5d5d5;
    min-height: 2.7rem;
    display: flex;
    align-items: center;
    padding: 15px;
  }
  > * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    display: block;
  }
`;

function App() {
  return (
    <>
      <Container>
        <h2>Butttons Primary</h2>
        <br />
        <h4>Butttons default</h4>
        <Button onClick={() => console.log(Math.random())}>
          Label button
        </Button>
        <code>
          {`<Button onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>


        <h4>Butttons Primary SM</h4>
        <Button sm onClick={() => console.log(Math.random())}>
          Label button
        </Button>
        <code>
          {`<Button sm onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>

        <h4>Butttons Primary XS</h4>
        <Button xs onClick={() => console.log(Math.random())}>
          Button
        </Button>
        <code>
          {`<Button xs onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>
      </Container>
      <Container>
        <h2>Butttons Secondary</h2>
        <br />
        <h4>Butttons default</h4>
        <Button secondary onClick={() => console.log(Math.random())}>
          Label button
        </Button>
        <code>
          {`<Button onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>


        <h4>Butttons Secondary SM</h4>
        <Button sm secondary onClick={() => console.log(Math.random())}>
          Label button
        </Button>
        <code>
          {`<Button sm onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>

        <h4>Butttons Secondary XS</h4>
        <Button xs secondary onClick={() => console.log(Math.random())}>
          Button
        </Button>
        <code>
          {`<Button xs onClick={() => console.log(Math.random())}>
          Label button
        </Button>`}
        </code>
      </Container>
      <Finished />
    </>
  );
}
const Finished = () => {
  return (
    <>
      <Container>
        <h2>Tamanhos </h2>
        <h3>xs</h3>
        <Input
          placeHolder="Typed"
          label="Label: "
          xs
          setValue={(e) => console.log(e)}
        />
        <h3>sm</h3>
        <Input
          placeHolder="Typed"
          label="Label: "
          sm
          setValue={(e) => console.log(e)}
        />
        <h3>md</h3>
        <Input
          placeHolder="Typed"
          label="Label: "
          md
          setValue={(e) => console.log(e)}
        />

        <h3>lg</h3>
        <Input
          placeHolder="Typed"
          label="Label: "
          lg
          setValue={(e) => console.log(e)}
        />
        <h3>xl</h3>
        <Input
          placeHolder="Typed"
          label="Label: "
          xl
          setValue={(e) => console.log(e)}
        />
        <code>
          {`<Input 
            xl
            placeHolder="Typed "
            label="Celular: "
            setValue={(e) => void(e)}
          />`}
        </code>
      </Container>
      <Container>
        <h2>Mascara de input </h2>
        <Input
          sm
          placeHolder="(11) 99999-9999"
          label="Celular: "
          setValue={(e) => console.log(e)}
          type="tel"
          maskInput="(99) 99999-9999"
        />

        <code>
          {`<Input
          sm
          placeHolder="(11) 99999-9999"
          label="Celular: "
          setValue={(e) => void(e)}
          type="tel"
          maskInput="(99) 99999-9999"
        />`}
        </code>
      </Container>
      <Container>
        <h2>Error </h2>

        <Input
          sm
          placeHolder="exemplo@exemplo.com"
          label="E-mail: "
          setValue={(e) => console.log(e)}
          type="e-mail"
        />
        <Input
          sm
          placeHolder="exemplo@exemplo.com"
          label="E-mail: "
          setValue={(e) => console.log(e)}
          type="e-mail"
          name="e-mail"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
            {
              description: "error message here 2",
              errorType: "error 2",
              inputName: "e-mail 2",
            },
            {
              description: "error message here 3",
              errorType: "error 3",
              inputName: "e-mail 2",
            },
          ]}
        />
        <code>
          {`<Input
          sm
          placeHolder="exemplo@exemplo.com"
          label="E-mail: "
          setValue={(e) => void(e)}
          type="e-mail"
          errors={ [
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
            {
              description: "error message here 2",
              errorType: "error 2",
              inputName: "e-mail",
            },
            ...
          ]}
        />`}
        </code>
        <code>
          <p>{`errors={ [
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
            {
              description: "error message here 2",
              errorType: "error 2",
              inputName: "e-mail",
            },
            ...
          ]}`}</p>
        </code>
      </Container>
      <Container>
        <h2>Password </h2>
        <Input
          sm
          label="Senha: "
          setValue={(e) => console.log(e)}
          type="password"
        />

        <code>
          {`<Input
          sm
          placeHolder="(11) 99999-9999"
          label="Celular: "
          setValue={(e) => void(e)}
          type="tel"
          maskInput="(99) 99999-9999"
        />`}
        </code>

        <h2>Password error</h2>

        <Input
          sm
          label="Label: "
          setValue={(e) => console.log(e)}
          type="password"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />
        <code>
          {`<Input
          sm
          label="Label: "
          setValue={(e) => console.log(e)}
          type="password"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "password",
            }
          ]}
        />`}
        </code>
      </Container>

      <Container>
        <h2>date </h2>
        <Input
          sm
          label="Label: "
          setValue={(e) => console.log(e)}
          type="date"
        />

        <code>
          {`<Input
          sm
          placeHolder="(11) 99999-9999"
          label="Label: "
          setValue={(e) => void(e)}
          type="tel"
          maskInput="(99) 99999-9999"
        />`}
        </code>

        <h2>date error</h2>

        <Input
          sm
          label="Label: "
          setValue={(e) => console.log(e)}
          type="date"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />
        <code>
          {`<Input
          sm
          label="Label: "
          setValue={(e) => console.log(e)}
          type="password"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "password",
            }
          ]}
        />`}
        </code>
      </Container>
      <Container>
        <h2>Search </h2>
        <Input
          sm
          placeHolder="Selecionar"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="search"
        />

        <code>
          {`<Input
          sm
          placeHolder="Selecionar"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="search"
        />`}
        </code>
        <h2>Search error</h2>
        <Input
          sm
          placeHolder="Selecionar"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="search"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />

        <code>
          {`<Input
          sm
          placeHolder="Selecionar"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="search"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />`}
        </code>
      </Container>
      <Container>
        <h2>Card </h2>
        <Input
          sm
          placeHolder="0000 0000 0000"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="card"
          maskInput="9999 9999 9999 9999"
        />

        <code>
          {`<Input
          sm
          placeHolder="0000 0000 0000"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="card"
          maskInput="9999 9999 9999 9999"
        />`}
        </code>
        <h2>Card error</h2>
        <Input
          sm
          placeHolder="0000 0000 0000"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="card"
          maskInput="9999 9999 9999 9999"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />

        <code>
          {`<Input
          sm
          placeHolder="0000 0000 0000"
          label="Label: "
          setValue={(e) => console.log(e)}
          type="card"
          maskInput="9999 9999 9999 9999"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />`}
        </code>
      </Container>
      <Container>
        <h2>Select </h2>
        <Select
          sm
          opitions={[
            { name: "1x 100,00", value: "100" },
            { name: "2x 55,00", value: "110" },
            { name: "3x 40,00", value: "120" },
          ]}
          setValue={(e) => console.log(e)}
          label="Label:"
        />

        <code>
          {`<Select
          sm
          opitions={[{ name: "1x 100,00", value: "100" },{ name: "2x 55,00", value: "110" },{ name: "3x 40,00", value: "120" }]}
          setValue={(e) => console.log(e)}
          label="Label:"
        />`}
        </code>

        <h2>Select error</h2>
        <Select
          sm
          desabled
          opitions={[
            { name: "1x 100,00", value: "100" },
            { name: "2x 55,00", value: "110" },
            { name: "3x 40,00", value: "120" },
          ]}
          setValue={(e) => console.log(e)}
          label="Label:"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />

        <code>
          {`<Select
          sm
          opitions={[{ name: "1x 100,00", value: "100" },{ name: "2x 55,00", value: "110" },{ name: "3x 40,00", value: "120" }]}
          setValue={(e) => console.log(e)}
          label="Label:"
          errors={[
            {
              description: "error message here",
              errorType: "error",
              inputName: "e-mail",
            },
          ]}
        />`}
        </code>
      </Container>
    </>
  );
};

export default App;
