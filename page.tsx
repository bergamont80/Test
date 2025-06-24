'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function KautionPortalDemo() {
  const [step, setStep] = useState(1);
  const [mieter, setMieter] = useState("");
  const [betrag, setBetrag] = useState("");
  const [bestaetigt, setBestaetigt] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-xl shadow-2xl">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">Kautionsportal Demo</h1>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="mieter">Name des Mieters</Label>
                <Input
                  id="mieter"
                  value={mieter}
                  onChange={(e) => setMieter(e.target.value)}
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <Label htmlFor="betrag">Kautionsbetrag (€)</Label>
                <Input
                  id="betrag"
                  type="number"
                  value={betrag}
                  onChange={(e) => setBetrag(e.target.value)}
                  placeholder="z. B. 150"
                />
              </div>
              <Button onClick={() => setStep(2)} disabled={!mieter || !betrag}>
                Weiter zur Zahlung
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-lg">
                {mieter} zahlt eine Kaution in Höhe von <strong>{betrag} €</strong>
              </p>
              <Button className="w-full" onClick={() => setStep(3)}>
                Zahlung simulieren
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-green-700 text-lg font-medium">
                Zahlung erfolgreich! Die Kaution ist sicher hinterlegt.
              </p>
              <Button onClick={() => setStep(4)}>Gerät zurückgeben</Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <Label>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={bestaetigt}
                  onChange={(e) => setBestaetigt(e.target.checked)}
                />
                Rückgabe des Geräts wurde bestätigt
              </Label>
              <Button onClick={() => setStep(5)} disabled={!bestaetigt}>
                Kaution freigeben
              </Button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-2">
              <p className="text-green-800 font-semibold">
                Kaution in Höhe von {betrag} € wurde an {mieter} zurücküberwiesen.
              </p>
              <Button variant="outline" onClick={() => {
                setStep(1);
                setMieter("");
                setBetrag("");
                setBestaetigt(false);
              }}>
                Neue Transaktion starten
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}