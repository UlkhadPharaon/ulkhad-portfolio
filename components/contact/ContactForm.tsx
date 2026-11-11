'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send } from 'lucide-react';

type FormValues = { name: string; email: string; type: string; budget: string; message: string; website: string };

export function ContactForm({ locale, initialType = '' }: { locale: 'fr' | 'en'; initialType?: string }) {
  const fr = locale === 'fr';
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);
  const [errorText, setErrorText] = useState('');
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({ defaultValues: { name: '', email: '', type: initialType, budget: '', message: '', website: '' } });

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type');
    if (type) setValue('type', type);
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    setSending(true); setResult(null); setErrorText('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || (fr ? 'Envoi impossible.' : 'Message could not be sent.'));
      setResult('success'); reset({ name: '', email: '', type: initialType, budget: '', message: '', website: '' });
    } catch (error) {
      setResult('error'); setErrorText(error instanceof Error ? error.message : (fr ? 'Une erreur est survenue.' : 'Something went wrong.'));
    } finally { setSending(false); }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid">
        <label>{fr ? 'Votre nom' : 'Your name'}<input placeholder={fr ? 'Nom et prénom' : 'Full name'} {...register('name', { required: fr ? 'Votre nom est requis.' : 'Your name is required.', minLength: { value: 2, message: fr ? 'Deux caractères minimum.' : 'At least two characters.' } })} />{errors.name && <small className="field-error">{errors.name.message}</small>}</label>
        <label>{fr ? 'Votre email' : 'Your email'}<input type="email" placeholder="name@company.com" {...register('email', { required: fr ? 'Votre email est requis.' : 'Your email is required.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: fr ? 'Adresse email invalide.' : 'Invalid email address.' } })} />{errors.email && <small className="field-error">{errors.email.message}</small>}</label>
        <label>{fr ? 'Type de projet' : 'Project type'}<select {...register('type', { required: fr ? 'Choisissez un type de projet.' : 'Choose a project type.' })}><option value="">{fr ? 'Sélectionner une catégorie' : 'Select a category'}</option><option value="film">Film & VFX</option><option value="xr">XR / 3D / Interactive</option><option value="ai">AI agents / Automation</option><option value="collaboration">Collaboration / Other</option></select>{errors.type && <small className="field-error">{errors.type.message}</small>}</label>
        <label>{fr ? 'Budget indicatif' : 'Indicative budget'}<select {...register('budget')}><option value="">{fr ? 'Je préfère en discuter' : 'Prefer to discuss'}</option><option value="under-500k">{fr ? 'Moins de 500 000 FCFA' : 'Under 500,000 FCFA'}</option><option value="500k-2m">500 000 – 2 000 000 FCFA</option><option value="2m-5m">2 000 000 – 5 000 000 FCFA</option><option value="5m-plus">5 000 000 FCFA +</option><option value="not-defined">{fr ? 'À définir' : 'Not defined'}</option></select></label>
      </div>
      <label>{fr ? 'Parlons du projet' : 'Tell me about the project'}<textarea rows={6} placeholder={fr ? 'Contexte, objectif, délais, contraintes…' : 'Context, objective, timeline, constraints…'} {...register('message', { required: fr ? 'Ajoutez quelques détails.' : 'Please add some details.', minLength: { value: 20, message: fr ? '20 caractères minimum.' : 'At least 20 characters.' } })} />{errors.message && <small className="field-error">{errors.message.message}</small>}</label>
      <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" {...register('website')} /></label>
      <div className="form-bottom"><span>{fr ? 'Réponse sous 2 à 3 jours ouvrés en général.' : 'Usually responding within 2–3 business days.'}</span><button type="submit" className="button button--gold" disabled={sending}>{sending ? (fr ? 'Envoi…' : 'Sending…') : (fr ? 'Envoyer le message' : 'Send message')} <Send size={15} /></button></div>
      {result === 'success' && <p className="form-result form-result--success"><CheckCircle2 size={16} /> {fr ? 'Message envoyé. Merci, je reviens vers vous.' : 'Message sent. Thank you — I’ll be in touch.'}</p>}
      {result === 'error' && <p className="form-result form-result--error">{errorText}</p>}
    </form>
  );
}
