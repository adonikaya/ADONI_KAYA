'use client';

import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Users,
  AlertTriangle,
  Check,
  Sparkles,
  Eye,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Columns,
  Type,
  MoveVertical,
} from 'lucide-react';
import { FamilyDetails, FamilyMember } from '../../lib/types';
import { calculateSwargwasiLayout } from '../../lib/familyLayoutEngine';

interface FamilyMembersFormProps {
  family: FamilyDetails;
  onChange: (updated: Partial<FamilyDetails>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const FamilyMembersForm: React.FC<FamilyMembersFormProps> = ({
  family,
  onChange,
  onNext,
  onBack,
}) => {
  const [newNameInput, setNewNameInput] = useState('');
  const [quickBulkInput, setQuickBulkInput] = useState('');
  const [showBulkMode, setShowBulkMode] = useState(false);

  // Layout settings
  const layoutStyle = family.layoutStyle ?? 'swargwasi-top';
  const columnCount = family.userColumns ?? 2;
  const alignment = family.userAlignment ?? 'center';
  const fontSizeDelta = family.fontSizeDelta ?? 0;
  const lineSpacing = family.lineSpacing ?? 1.45;

  // Live calculation using Swargwasi Engine
  const layoutResult = calculateSwargwasiLayout(family.members || [], {
    layout: layoutStyle,
    columns: columnCount,
    alignment: alignment,
    fontSizeDelta: fontSizeDelta,
    lineSpacing: lineSpacing,
    columnSpacing: family.columnSpacing,
    topBottomSpacing: family.topBottomSpacing,
  });

  // Add a single member
  const handleAddMember = () => {
    if (!newNameInput.trim()) return;
    const newMember: FamilyMember = {
      id: `member-${Date.now()}-${Math.random()}`,
      name: newNameInput.trim(),
      isSwargwasi: false,
    };
    onChange({ members: [...(family.members || []), newMember] });
    setNewNameInput('');
  };

  // Bulk add members (comma or newline separated)
  const handleApplyBulk = () => {
    if (!quickBulkInput.trim()) return;
    const splitNames = quickBulkInput
      .split(/[\n,]+/)
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    const newMembers: FamilyMember[] = splitNames.map((name) => ({
      id: `member-${Date.now()}-${Math.random()}`,
      name,
      isSwargwasi: false,
    }));

    onChange({ members: [...(family.members || []), ...newMembers] });
    setQuickBulkInput('');
    setShowBulkMode(false);
  };

  // Remove member
  const handleRemove = (id: string) => {
    onChange({ members: (family.members || []).filter((m) => m.id !== id) });
  };

  // Toggle isSwargwasi
  const handleToggleSwargwasi = (id: string) => {
    const updated = (family.members || []).map((m) =>
      m.id === id ? { ...m, isSwargwasi: !m.isSwargwasi } : m
    );
    onChange({ members: updated });
  };

  // Move member up/down in ordering
  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const list = family.members || [];
    if (targetIndex < 0 || targetIndex >= list.length) return;

    const updated = [...list];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    onChange({ members: updated });
  };

  // Quick preset sample names for fast testing
  const handleLoadSampleNames = () => {
    const samples: { name: string; isSwargwasi?: boolean }[] = [
      { name: 'દેસાઈ ગોવાભાઈ જેઠાભાઈ', isSwargwasi: true },
      { name: 'દેસાઈ આશાબેન ગોવાભાઈ', isSwargwasi: true },
      { name: 'દેસાઈ દેવિકાબેન', isSwargwasi: false },
      { name: 'દેસાઈ પલાબેન', isSwargwasi: false },
      { name: 'દેસાઈ ત્રિશાબેન', isSwargwasi: false },
      { name: 'દેસાઈ શ્રેયાબેન', isSwargwasi: false },
      { name: 'દેસાઈ હર્ષદભાઈ', isSwargwasi: false },
      { name: 'દેસાઈ કાંતિભાઈ', isSwargwasi: false },
      { name: 'દેસાઈ જગદીશભાઈ', isSwargwasi: false },
      { name: 'દેસાઈ ભાવનાબેન', isSwargwasi: false },
    ];
    const newMembers: FamilyMember[] = samples.map((s) => ({
      id: `member-${Date.now()}-${Math.random()}`,
      name: s.name,
      isSwargwasi: s.isSwargwasi,
    }));
    onChange({ members: newMembers });
  };

  const alignCssClass =
    alignment === 'left' ? 'text-left' : alignment === 'right' ? 'text-right' : 'text-center';

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 1. Family Members Header & Smart Layout Status */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-saffron" />
              <span>પરિવારજનોનાં નામ અને લેઆઉટ એન્જિન</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-1">
              માઈક્રોસોફ્ટ વર્ડ જેવા પાવરફુલ નિયંત્રણો સાથે સ્ટાર (લી.) અને પરિવારજનોના નામો સુંદર સ્તંભોમાં ગોઠવો.
            </p>
          </div>
        </div>

        {/* Smart Layout Engine Metrics Bar */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-gujarati">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">કુલ સભ્યો:</span>
            <span className="font-bold bg-white text-brand-saffron px-2.5 py-0.5 rounded-full border border-amber-200 shadow-xs">
              {(family.members || []).length} નામો
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">સ્ટાર સભ્યો:</span>
            <span className="font-bold bg-white text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-200">
              {layoutResult.swargwasiNames.length} સભ્યો
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">સ્તંભ સંખ્યા (Columns):</span>
            <span className="font-bold bg-white text-gray-800 px-2.5 py-0.5 rounded-full border border-amber-200">
              {columnCount} સ્તંભ
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">ફોન્ટ સાઇઝ:</span>
            <span className="font-bold bg-white text-gray-800 px-2.5 py-0.5 rounded-full border border-amber-200">
              {layoutResult.fontSize} px
            </span>
          </div>
        </div>

        {/* Overflow Warning if applicable */}
        {layoutResult.hasOverflow && (
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-rose-800 font-gujarati">નામોની સંખ્યા વધુ છે</h4>
              <p className="text-xs text-rose-700 font-gujarati mt-0.5">
                {layoutResult.overflowMessage}
              </p>
            </div>
          </div>
        )}

        {/* Add Input Bar */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="પરિવારજનનું પૂરું નામ દાખલ કરો"
              value={newNameInput}
              onChange={(e) => setNewNameInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddMember();
                }
              }}
              className="min-w-0 flex-1 px-3 sm:px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-medium"
            />
            <button
              type="button"
              onClick={handleAddMember}
              disabled={!newNameInput.trim()}
              className="shrink-0 px-3 sm:px-5 py-2.5 bg-brand-saffron text-white rounded-xl text-sm font-bold hover:bg-brand-saffronDark disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-sm font-gujarati"
            >
              <Plus className="w-4 h-4" />
              <span>ઉમેરો</span>
            </button>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowBulkMode(!showBulkMode)}
              className="text-xs text-brand-goldDark hover:underline font-bold font-gujarati"
            >
              {showBulkMode ? 'એક-એક નામ ઉમેરો' : 'એકસાથે ઘણા નામો ઉમેરો (Bulk Add)'}
            </button>
          </div>

          {/* Bulk Add Textarea */}
          {showBulkMode && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
              <label className="block text-xs font-bold text-gray-700 font-gujarati">
                નામો અલ્પવિરામ (,) અથવા નવી લાઈનમાં પેસ્ટ કરો:
              </label>
              <textarea
                rows={3}
                placeholder="નામ ૧&#10;નામ ૨&#10;નામ ૩"
                value={quickBulkInput}
                onChange={(e) => setQuickBulkInput(e.target.value)}
                className="w-full p-3 text-xs bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleApplyBulk}
                  className="px-4 py-1.5 text-xs font-bold bg-brand-saffron text-white rounded-lg hover:bg-brand-saffronDark font-gujarati"
                >
                  તમામ નામો ઉમેરો
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Family Members Reorderable List */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-700 font-gujarati">
            ઉમેરેલા સભ્યોની યાદી ({(family.members || []).length}):
          </label>

          {(family.members || []).length === 0 ? (
            <div className="text-center py-8 bg-brand-cream/30 border border-dashed border-gray-300 rounded-xl">
              <p className="text-xs text-gray-500 font-gujarati">
                હજુ સુધી કોઈ પરિવારજનનું નામ ઉમેરેલ નથી. જો પરિવારજનો ઉમેરવા ન હોય તો આ સેક્શન કાર્ડ પર આપોઆપ છુપાઈ જશે.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
              {(family.members || []).map((member, index) => (
                <div
                  key={member.id}
                  className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 group transition-colors ${
                    member.isSwargwasi
                      ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-300'
                      : 'bg-gray-50 border-gray-200 hover:border-brand-gold/60 hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-bold text-gray-400 font-mono w-5">
                    {index + 1}.
                  </span>
                  {member.isSwargwasi && (
                    <span className="text-amber-600 text-xs font-bold" title="સ્ટાર">★</span>
                  )}
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => {
                      const updated = [...(family.members || [])];
                      updated[index] = { ...member, name: e.target.value };
                      onChange({ members: updated });
                    }}
                    className="flex-1 text-xs font-gujarati font-semibold bg-transparent focus:bg-white focus:outline-none px-1 py-0.5 rounded"
                  />

                  <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {/* Swargwasi / Star Toggle */}
                    <button
                      type="button"
                      onClick={() => handleToggleSwargwasi(member.id)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold font-gujarati transition-colors flex items-center gap-1 ${
                        member.isSwargwasi
                          ? 'bg-amber-400 text-amber-950 font-black'
                          : 'bg-gray-200 text-gray-600 hover:bg-amber-100 hover:text-amber-800'
                      }`}
                      title={member.isSwargwasi ? 'સ્ટાર દૂર કરો' : 'સ્ટાર ચિહ્નિત કરો'}
                    >
                      <span>★</span>
                      <span>{member.isSwargwasi ? 'સ્ટાર' : 'સામાન્ય'}</span>
                    </button>

                    <button
                      type="button"
                      disabled={index === 0}
                      onClick={() => handleMove(index, 'up')}
                      className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      title="ઉપર ખસેડો"
                    >
                      <ArrowUp className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button
                      type="button"
                      disabled={index === (family.members || []).length - 1}
                      onClick={() => handleMove(index, 'down')}
                      className="p-1 hover:bg-gray-200 rounded disabled:opacity-30"
                      title="નીચે ખસેડો"
                    >
                      <ArrowDown className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(member.id)}
                      className="p-1 hover:bg-rose-100 rounded text-rose-600"
                      title="દૂર કરો"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. ADVANCED LAYOUT & FORMATTING CONTROLS (Word-like Controls) */}
        <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-amber-200/80 pb-2.5">
            <h3 className="text-sm font-bold text-amber-950 font-serifGujarati flex items-center gap-2">
              <Columns className="w-4 h-4 text-amber-700" />
              <span>પરિવાર લેઆઉટ અને ગોઠવણ નિયંત્રણો (Layout & Formatting)</span>
            </h3>
            <span className="text-[11px] bg-amber-200/80 text-amber-900 font-bold px-2 py-0.5 rounded-full font-gujarati">
              લાઈવ પ્રિવ્યૂ સાથે
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Predefined Layout Style (Layout 1 vs Layout 2) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 font-gujarati block">
                લેઆઉટ શૈલી પસંદ કરો:
              </label>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onChange({ layoutStyle: 'swargwasi-top' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    layoutStyle === 'swargwasi-top'
                      ? 'bg-white border-brand-saffron ring-2 ring-brand-saffron/30 shadow-xs'
                      : 'bg-white/60 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-maroon font-gujarati">
                      Layout 1 — ઉપર કેન્દ્રિત સ્ટાર સભ્યો (લી.)
                    </span>
                    {layoutStyle === 'swargwasi-top' && (
                      <Check className="w-4 h-4 text-brand-saffron stroke-[3]" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 font-gujarati mt-0.5">
                    સ્ટાર કરેલા નામો ઉપર કેન્દ્રમાં &apos;લી.&apos; સાથે આવશે, સામાન્ય સભ્યો નીચે સ્તંભોમાં ગોઠવાશે.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onChange({ layoutStyle: 'swargwasi-columns' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    layoutStyle === 'swargwasi-columns'
                      ? 'bg-white border-brand-saffron ring-2 ring-brand-saffron/30 shadow-xs'
                      : 'bg-white/60 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-maroon font-gujarati">
                      Layout 2 — સ્તંભવાર સ્ટાર સભ્યો
                    </span>
                    {layoutStyle === 'swargwasi-columns' && (
                      <Check className="w-4 h-4 text-brand-saffron stroke-[3]" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 font-gujarati mt-0.5">
                    સ્ટાર કરેલા નામો પણ ઉપર આડા સ્તંભોમાં ગોઠવાશે અને નીચે સામાન્ય સભ્યો આવશે.
                  </p>
                </button>
              </div>
            </div>

            {/* Columns and Text Alignment Controls */}
            <div className="space-y-4">
              {/* Columns Selector */}
              <div>
                <label className="text-xs font-bold text-gray-800 font-gujarati block mb-1.5">
                  સ્તંભ સંખ્યા (Columns):
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {([1, 2, 3, 4] as const).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => onChange({ userColumns: n })}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        columnCount === n
                          ? 'bg-brand-saffron text-white border-brand-saffron shadow-sm'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-brand-saffron'
                      }`}
                    >
                      {n} {n === 1 ? 'સ્તંભ' : 'સ્તંભ'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Alignment Selector */}
              <div>
                <label className="text-xs font-bold text-gray-800 font-gujarati block mb-1.5">
                  ટેક્સ્ટ ગોઠવણ (Alignment):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'left', label: 'ડાબે (Left)', icon: AlignLeft },
                    { value: 'center', label: 'વચ્ચે (Center)', icon: AlignCenter },
                    { value: 'right', label: 'જમણે (Right)', icon: AlignRight },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => onChange({ userAlignment: opt.value as 'left' | 'center' | 'right' })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border flex items-center justify-center gap-1.5 transition-all font-gujarati ${
                        alignment === opt.value
                          ? 'bg-brand-saffron text-white border-brand-saffron shadow-sm'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-brand-saffron'
                      }`}
                    >
                      <opt.icon className="w-3.5 h-3.5" />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size Fine-Tuning Slider */}
              <div>
                <div className="flex justify-between text-xs text-gray-700 font-bold font-gujarati mb-1">
                  <span className="flex items-center gap-1">
                    <Type className="w-3.5 h-3.5 text-amber-700" />
                    <span>ફોન્ટ સાઈઝ એડજસ્ટ:</span>
                  </span>
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200">
                    {layoutResult.fontSize} px
                  </span>
                </div>
                <input
                  type="range"
                  min={-6}
                  max={6}
                  value={fontSizeDelta}
                  onChange={(e) => onChange({ fontSizeDelta: parseInt(e.target.value, 10) })}
                  className="w-full accent-brand-saffron cursor-pointer"
                />
              </div>

              {/* Line Spacing Selection */}
              <div>
                <div className="flex justify-between text-xs text-gray-700 font-bold font-gujarati mb-1.5">
                  <span className="flex items-center gap-1">
                    <MoveVertical className="w-3.5 h-3.5 text-amber-700" />
                    <span>લાઈન સ્પેસિંગ:</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 1.3, label: 'કોમ્પેક્ટ' },
                    { val: 1.45, label: 'સામાન્ય' },
                    { val: 1.65, label: 'વિસ્તૃત' },
                  ].map((s) => (
                    <button
                      key={s.val}
                      type="button"
                      onClick={() => onChange({ lineSpacing: s.val })}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition-all font-gujarati ${
                        lineSpacing === s.val
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-amber-500'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LIVE SIMULATION PREVIEW BOX */}
        {layoutResult.totalNames > 0 && (
          <div className="p-5 bg-stone-900 text-white rounded-2xl space-y-3 shadow-lg border border-stone-800">
            <div className="flex items-center justify-between text-xs text-brand-gold font-gujarati border-b border-stone-800 pb-2">
              <span className="flex items-center gap-1.5 font-bold">
                <Eye className="w-4 h-4 text-brand-saffron" />
                <span>પરિવાર સેક્શન લાઈવ પ્રિવ્યૂ:</span>
              </span>
              <span className="text-[11px] text-gray-400 font-mono">
                {layoutStyle === 'swargwasi-top' ? 'Layout 1' : 'Layout 2'} • {columnCount} સ્તંભ • {layoutResult.fontSize}px
              </span>
            </div>

            <div className="space-y-4 pt-1">
              <div className="text-center font-bold text-amber-400 font-gujarati text-sm tracking-wide">
                લી.
              </div>

              {/* Swargwasi Section */}
              {layoutResult.hasSwargwasi && (
                <div className="space-y-2">
                  {layoutStyle === 'swargwasi-top' ? (
                    <div className="text-center space-y-1">
                      {layoutResult.swargwasiNames.map((name, i) => (
                        <div key={i} className="text-xs font-bold text-amber-200 font-gujarati">
                          {name}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="grid gap-2 text-center"
                      style={{
                        gridTemplateColumns: `repeat(${layoutResult.swargwasiColumns.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {layoutResult.swargwasiColumns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1">
                          {col.map((name, rIdx) => (
                            <div key={rIdx} className="text-xs font-bold text-amber-200 font-gujarati">
                              {name}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {layoutResult.hasNormal && (
                    <div className="w-1/3 mx-auto border-t border-amber-500/40 my-2" />
                  )}
                </div>
              )}

              {/* Normal Members Section in Columns */}
              {layoutResult.hasNormal && (
                <div
                  className={`grid gap-3 ${alignCssClass}`}
                  style={{
                    gridTemplateColumns: `repeat(${layoutResult.columnCount}, minmax(0, 1fr))`,
                  }}
                >
                  {layoutResult.normalColumns.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-1">
                      {col.map((name, rIdx) => (
                        <div
                          key={rIdx}
                          className="text-xs font-gujarati text-gray-200 truncate"
                        >
                          {name}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 4. Optional Family Footer Banner */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-maroon font-serifGujarati">
              પરિવારનું નામ અને ગામ (બોટમ બેનર)
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-0.5">
              કાર્ડના તળિયે સુવર્ણ પટ્ટીમાં સમગ્ર પરિવાર અને ગામનું નામ પ્રદર્શિત થશે (ઓપ્શનલ).
            </p>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-gujarati text-gray-700 font-bold">બેનર બતાવો:</span>
            <input
              type="checkbox"
              checked={family.showFooter}
              onChange={(e) => onChange({ showFooter: e.target.checked })}
              className="w-4 h-4 text-brand-saffron rounded focus:ring-brand-saffron"
            />
          </label>
        </div>

        {family.showFooter && (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                  પરિવારનું નામ (ઓપ્શનલ)
                </label>
                <input
                  type="text"
                  placeholder="પરિવારનું નામ (અટક) દાખલ કરો"
                  value={family.familyName || ''}
                  onChange={(e) => onChange({ familyName: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-brand-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                  મૂળ વતન / ગામનું નામ (ઓપ્શનલ)
                </label>
                <input
                  type="text"
                  placeholder="ગામનું નામ દાખલ કરો"
                  value={family.nativeVillage || ''}
                  onChange={(e) => onChange({ nativeVillage: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
                />
              </div>
            </div>

            {/* Live Banner Preview (Only if familyName or nativeVillage entered) */}
            {(family.familyName || family.nativeVillage) && (
              <div className="p-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-center rounded-xl shadow-xs font-gujarati text-sm sm:text-base border border-amber-300">
                ॥ સમસ્ત {family.familyName || ''} પરિવાર
                {family.nativeVillage ? ` (${family.nativeVillage})` : ''} ॥
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="bg-white p-4 rounded-2xl border border-brand-sand flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 font-gujarati text-center"
        >
          પાછા જાઓ
        </button>

        <button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto px-4 sm:px-8 py-2.5 rounded-xl bg-brand-saffron text-white text-sm font-bold hover:bg-brand-saffronDark shadow-md flex items-center justify-center gap-2 font-gujarati text-center"
        >
          <span>આગળ વધો (સંપૂર્ણ પૂર્વદર્શન અને એડિટર)</span>
          <Check className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
