"use client";

import { useEffect, useState } from "react";
import { getWebsiteSettings, saveWebsiteSettings } from "@/services/settingsService";
import { WebsiteSettings } from "@/types/settings";

export default function WebsiteSettingsPage() {
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getWebsiteSettings();
      setSettings(data);
    } finally {
      setLoading(false);
    }
  }

  async function save() {
    if (!settings) return;
    setSaving(true);
    try {
      await saveWebsiteSettings(settings);
      alert("Website settings saved successfully.");
    } catch (e) {
      console.error(e);
      alert("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8">Loading...</div>;
  if (!settings) return null;

  const section = "bg-white rounded-xl shadow p-6 space-y-4";
  const input = "w-full border rounded-lg p-3";
  const label = "block text-sm font-semibold mb-1";

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Website Settings</h1>
          <p className="text-gray-500 mt-1">
            Manage public website content from one place.
          </p>
        </div>

        <button
          onClick={save}
          disabled={saving}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">Hero</h2>

        <div>
          <label className={label}>Title</label>
          <input className={input}
            value={settings.hero.title}
            onChange={(e)=>setSettings({...settings,hero:{...settings.hero,title:e.target.value}})}
          />
        </div>

        <div>
          <label className={label}>Subtitle</label>
          <input className={input}
            value={settings.hero.subtitle}
            onChange={(e)=>setSettings({...settings,hero:{...settings.hero,subtitle:e.target.value}})}
          />
        </div>

        <div>
          <label className={label}>Description</label>
          <textarea className={input}
            rows={4}
            value={settings.hero.description}
            onChange={(e)=>setSettings({...settings,hero:{...settings.hero,description:e.target.value}})}
          />
        </div>
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">About</h2>

        <input className={input}
          placeholder="Title"
          value={settings.about.title}
          onChange={(e)=>setSettings({...settings,about:{...settings.about,title:e.target.value}})}
        />

        <textarea className={input}
          rows={5}
          placeholder="Description"
          value={settings.about.description}
          onChange={(e)=>setSettings({...settings,about:{...settings.about,description:e.target.value}})}
        />
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">Contact</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className={input}
            placeholder="Phone"
            value={settings.contact.phone}
            onChange={(e)=>setSettings({...settings,contact:{...settings.contact,phone:e.target.value}})}
          />

          <input className={input}
            placeholder="Email"
            value={settings.contact.email}
            onChange={(e)=>setSettings({...settings,contact:{...settings.contact,email:e.target.value}})}
          />
        </div>

        <textarea className={input}
          rows={3}
          placeholder="Address"
          value={settings.contact.address}
          onChange={(e)=>setSettings({...settings,contact:{...settings.contact,address:e.target.value}})}
        />
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">Donation</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className={input}
            placeholder="UPI ID"
            value={settings.donation.upiId}
            onChange={(e)=>setSettings({...settings,donation:{...settings.donation,upiId:e.target.value}})}
          />

          <input className={input}
            placeholder="Bank Name"
            value={settings.donation.bankName}
            onChange={(e)=>setSettings({...settings,donation:{...settings.donation,bankName:e.target.value}})}
          />
        </div>
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">Footer</h2>

        <input className={input}
          placeholder="Copyright"
          value={settings.footer.copyright}
          onChange={(e)=>setSettings({...settings,footer:{...settings.footer,copyright:e.target.value}})}
        />
      </div>

      <div className={section}>
        <h2 className="text-xl font-semibold">SEO</h2>

        <input className={input}
          placeholder="Site Title"
          value={settings.seo.siteTitle}
          onChange={(e)=>setSettings({...settings,seo:{...settings.seo,siteTitle:e.target.value}})}
        />

        <textarea className={input}
          rows={3}
          placeholder="Meta Description"
          value={settings.seo.metaDescription}
          onChange={(e)=>setSettings({...settings,seo:{...settings.seo,metaDescription:e.target.value}})}
        />
      </div>
    </div>
  );
}