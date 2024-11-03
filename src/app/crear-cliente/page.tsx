import { crearCliente } from '../controllers/customer.controller'
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
  const [email, setNombres] = useState("");
  const [password, setApellidos] = useState("");
  const [password, setGenero] = useState("");
  const [password, setFechaNacimiento] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempted with:", { email, password });
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>Crear Cliente</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombres">Nombre</Label>
            <Input
              id="nombres"
              type="nombres"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input
              id="apellidos"
              type="apellidos"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="genero">Genero</Label>
            <Input
              id="genero"
              type="genero"
              placeholder="Genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fechaNacimiento">Fecha Nacimiento</Label>
            <Input
              id="fechaNacimiento"
              type="fechaNacimiento"
              placeholder="Fecha Nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick(crearCliente) className="w-full">
            Log in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
