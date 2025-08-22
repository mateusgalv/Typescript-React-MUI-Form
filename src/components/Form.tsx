import { Box, Button, Container, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from "react";

const EMPTY_FORM = {
  name: "",
  email: "",
  password: "",
};

function Form() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState(EMPTY_FORM);
  // const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { ...EMPTY_FORM };
    setErrors({ ...EMPTY_FORM });
    
    if(!form.email) {
      newErrors.email = "Defina seu e-mail";
    } else if(!emailRegex.test(form.email)) {
      newErrors.email = "E-mail inválido";
    }
    
    if(!form.password) {
      newErrors.password = "Defina sua senha";
    } else if(form.password.length < 6) {
      newErrors.password = "Sua senha deve possuir pelo menos 6 caracteres";
    }

    setErrors(newErrors);
  };

  const clear = () => {
    setForm(EMPTY_FORM);
    setErrors(EMPTY_FORM);
  };

  const handleSubmit = () => {
    validate();
  };

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
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField 
            required
            name="password"
            label="Senha"
            size="small"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            // slotProps={{
            //   input: {
            //     startAdornment: (
            //       <InputAdornment position="end">
            //         Add Icon
            //         <VisibilityIcon/>
            //       </InputAdornment>
            //     ),
            //   },
            // }}
          >
            <VisibilityIcon/>
          </TextField>
        </Stack>
      </Container>
      <Container
        sx={{
            padding: "30px",
            display: "flex",
            justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          onClick={clear}
        >
          Limpar
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </Container>
    </Box>
  )
}

export default Form;