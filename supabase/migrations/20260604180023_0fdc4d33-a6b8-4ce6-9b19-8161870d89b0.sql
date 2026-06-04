
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  company TEXT,
  product TEXT,
  quantity TEXT,
  message TEXT,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon;
GRANT INSERT, SELECT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(phone) BETWEEN 3 AND 50
    AND (email IS NULL OR char_length(email) <= 254)
    AND (company IS NULL OR char_length(company) <= 200)
    AND (product IS NULL OR char_length(product) <= 500)
    AND (quantity IS NULL OR char_length(quantity) <= 100)
    AND (message IS NULL OR char_length(message) <= 2000)
  );
