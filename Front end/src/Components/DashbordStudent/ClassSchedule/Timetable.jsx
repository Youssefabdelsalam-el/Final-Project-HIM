import React from 'react'

export default function Timetable() {
  return (
   <div className="w-full overflow-x-auto rounded-2xl border border-[#E4EAF3] bg-white shadow-sm">
  <table className="w-full min-w-225 border-collapse text-center">

    {/* Header */}
    <thead>
      <tr className="bg-[#618cf1] text-[#ffffff]">
        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الوقت
        </th>

        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الأحد
        </th>

        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الإثنين
        </th>

        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الثلاثاء
        </th>

        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الأربعاء
        </th>

        <th className="px-5 py-4 text-sm font-bold border-b border-[#E4EAF3]">
          الخميس
        </th>
      </tr>
    </thead>

    <tbody>

      {/* 08:00 - 10:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 border-b border-[#E4EAF3] text-[#17479E] font-bold whitespace-nowrap">
          08:00 - 10:00
        </td>

        {/* الأحد */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              مبادئ محاسبة إدارية
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              د. علاء عامر
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 401
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>

          </div>
        </td>

        {/* الإثنين */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              تحليل وتصميم نظم المعلومات
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              د. حازم الكبري
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 507
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>

          </div>
        </td>

        {/* الثلاثاء */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              إدارة مالية
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              أ.د. أحمد أبو القصمان
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 206
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>

          </div>
        </td>

        {/* الأربعاء */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              النظم الحديثة لتكنولوجيا المعلومات
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              أ.د. د. حازم الكبري
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 607
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>

          </div>
        </td>

        {/* الخميس */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

      </tr>


      {/* 10:00 - 12:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 border-b border-[#E4EAF3] text-[#17479E] font-bold whitespace-nowrap">
          10:00 - 12:00
        </td>

        {/* الأحد */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              تحليل وتصميم نظم المعلومات
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              د. هند
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 117
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>

          </div>
        </td>

        {/* الإثنين */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              لغة أجنبية 2
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              د. داليا عاطف
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 507
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>

          </div>
        </td>

        {/* الثلاثاء */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              إدارة الإنتاج
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              م. مارينا وديع
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 411
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>

          </div>
        </td>

        {/* الأربعاء */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">

            <h3 className="text-[#0057D9] font-bold text-sm">
              مبادئ محاسبة إدارية
            </h3>

            <p className="text-sm font-semibold text-[#4B5870]">
              د. منى داود
            </p>

            <p className="text-xs text-[#69758A]">
              قاعة 401
            </p>

            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>

          </div>
        </td>

        {/* الخميس */}
        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

      </tr>


      {/* 12:00 - 02:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 border-b border-[#E4EAF3] text-[#17479E] font-bold whitespace-nowrap">
          12:00 - 02:00
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
        —
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

      </tr>


      {/* 02:00 - 04:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 border-b border-[#E4EAF3] text-[#17479E] font-bold whitespace-nowrap">
          02:00 - 04:00
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              إدارة مالية
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              أ.د. أحمد أبو القصمان
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 206
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              لغة أجنبية 2
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              د. داليا عاطف
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 507
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">
            —
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              إدارة الإنتاج
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              أ.د. وليد أبو القصمان
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 411
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              النظم الحديثة
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              أ.د. حازم الكبري
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 607
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF2FF] text-[#0057D9] text-xs font-bold">
              محاضرة
            </span>
          </div>
        </td>

      </tr>


      {/* 04:00 - 06:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 border-b border-[#E4EAF3] text-[#17479E] font-bold whitespace-nowrap">
          04:00 - 06:00
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              لغة أجنبية 2
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              د. داليا عاطف
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 507
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#0057D9] font-bold text-sm">
              إدارة الإنتاج
            </h3>
            <p className="text-sm font-semibold text-[#4B5870]">
              م. مارينا وديع
            </p>
            <p className="text-xs text-[#69758A]">
              قاعة 411
            </p>
            <span className="px-3 py-1 rounded-md bg-[#EAF9F0] text-[#20A65A] text-xs font-bold">
              سكشن
            </span>
          </div>
        </td>

        <td className="px-4 py-5 border-b border-[#E4EAF3]">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

      </tr>


      {/* 06:00 - 08:00 */}
      <tr className="hover:bg-[#FAFCFF] transition-colors">

        <td className="px-5 py-5 text-[#17479E] font-bold whitespace-nowrap">
          06:00 - 08:00
        </td>

        <td className="px-4 py-5">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

        <td className="px-4 py-5">
          <div className="text-[#69758A] font-semibold">—</div>
        </td>

      </tr>

    </tbody>
  </table>
</div>
  )
}
