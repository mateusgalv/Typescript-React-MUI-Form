import { Box, Container, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      component="form"
      sx={{
        mt: "40px",
      }}
    >
      <Container
        sx={{
          padding: "30px",
        }}
      >
        <Stack spacing={2}>
          <TextField
            name="name" 
            label="Nome"
            size="small"
            value={form.name}
            onChange={handleChange}
          />
          <TextField 
            required
            name="email"
            label="E-mail"
            size="small"
            value={form.email}
            onChange={handleChange}
          />
          <TextField 
            required
            name="password"
            label="Senha"
            size="small"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Form;